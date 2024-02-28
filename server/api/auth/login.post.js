import { getUserByUsername } from '../../db/users.js' 
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshToken } from '../../utils/jwt.js'
import { userTransformer } from '../../utils/transformers.js'
import { createRefreshToken } from '../../db/refreshTokens.js'


export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    const { email, password } = body

    if(!username || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid Params' }))
    }


    // Is the User registered
    const user = await getUserByUsername(username)

    if(!user){
        return sendError(event, createError({ statusCode: 404, statusMessage: 'Username or Password is Invalid' }))
    }


    // Compare Passwords
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesThePasswordMatch){
        return sendError(event, createError({ statusCode: 404, statusMessage: 'Username or Password is Invalid' }))
    }


    // Generate Tokens 
    // Access Tokens
    // Refresh Tokens

    const { accessToken, refreshToken } = generateTokens(user)

    // Save it inside db

    await createRefreshToken({
        token: refreshToken,
        userId: user.id,
    })


    // Add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken, user: userTransformer(user), 
        
    }
})
