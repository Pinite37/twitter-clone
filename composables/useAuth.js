export default () => {
    /**
     * Authenticates the user by logging in with the provided username and password.
     *
     * @param {Object} param0 - an object containing the username and password
     * @return {Promise} a promise that resolves with the authentication data or rejects with an error
     */
    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })

                

                // resolve(true)
                console.log(data)
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        login
    }
}