<template>
    <div clas="flex flex-col">
        <!-- Previous Card: What's Happening -->
        <SidebarRightPreviewCard title="What's Happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">

                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">
                        {{ whatsHappening.title }}
                    </h2>

                    <p class="text-xs text-gray-400">
                        {{ whatsHappening.count }}
                    </p>

                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>



        <!-- Previous Card: Who to Follow -->
        <SidebarRightPreviewCard title="Who to Follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowsItems">

                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>


                    </div>

                    <div class="flex  h-full">
                        <button class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>

                </div>

            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>

    </div>
</template>

<script setup>

const whatsHappeningItems = ref([
    {
        title: 'Space X',
        count: '18.8k Tweets'
    },

    {
        title: '#Coding is Fun',
        count: '8.8k Tweets'
    },

    {
        title: '#artforall',
        count: '1.8k Tweets'
    },
])

const whoToFollowsItems = ref([
    {
        name: 'Joe Biden',
        handle: "@joeBiden",
        image: 'https://picsum.photos/200/200'

    },

    {
        name: 'Joe Biden',
        handle: "@joeBiden",
        image: 'https://picsum.photos/200/200'

    },

    {
        name: 'Joe Biden',
        handle: "@joeBiden",
        image: 'https://picsum.photos/200/200'

    },

    
])

</script>