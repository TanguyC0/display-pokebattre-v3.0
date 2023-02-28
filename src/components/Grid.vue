<template>
    <section class=" h-full  border p-6 rounded-lg overflow-y-scroll">
        <ul class="grid grid-cols-4 gap-4 wrap ">
            <template v-for="n in 60">
                <li class="h-32 w-32 hover:bg-violet-300 bg-white border border-gray-300 rounded-lg shadow  active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 ">
                    <img src="" alt="item" class="w-full justify-center">
                </li>
            </template>
        </ul>
    </section>
</template>