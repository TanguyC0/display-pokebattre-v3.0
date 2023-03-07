<template>
    <section class="h-full w-full flex overflow-y-auto">
        <ul class="w-full text-white">
            <li class="border w-full h-20 flex items-center">
                <h2 class="ml-5 w-16 text-center">avatar</h2>
                <h2 class="ml-5 w-32 text-center">pseudo</h2>
                <h2 class="ml-5 w-96 text-center">pokemon</h2>
                <h2 class="ml-5 w-16 text-center">level</h2>
                <h2 class="ml-5 w-16 text-center">energie</h2>
                <h2 class="ml-5 w-16 text-center">experience</h2>
                <h2 class="ml-5 w-16 text-center">argent</h2>
                <h2 class="ml-5 w-16 text-center">date</h2>
                <h2 class="ml-5 w-28 text-center">langue</h2>
                <h2 class="ml-5 w-28 text-center">color</h2>
                <h2 class="ml-5 w-16 text-center">update</h2>
                <h2 class="ml-5 w-16 text-center">delete</h2>
            </li>
            <li v-for="i in 100" class="border w-full h-20 flex items-center">
                <img src="" alt="" class="bg-white rounded-full w-16 h-16 ml-5">
                <p class="ml-5 w-32 text-center">pseudo</p>
                <div class="ml-5 w-96 flex">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                    <img src="" alt="" class="bg-white rounded-full w-16 h-16">
                </div>
                <p class="ml-5 w-16 text-center">100</p>
                <p class="ml-5 w-16 text-center">100/100</p>
                <p class="ml-5 w-16 text-center">6589</p>
                <p class="ml-5 w-16 text-center">25486</p>
                <p class="ml-5 w-16 text-center">01/01/2023</p>
                <div class="ml-5 w-28 flex justify-center">
                    <img src="src/assets/flag/fr.png" alt="" class="bg-white rounded-full w-16 h-16">
                </div>
                <div class="ml-5 w-28 flex justify-center">
                    <div class="rounded-full w-16 h-16" :class="{'bg-red-500' : true}"></div>
                </div>
                
                <button class="ml-5 w-16 text-center">update</button>
                <button class="ml-5 w-16 text-center">delete</button>
            </li>
        </ul>
    </section>
    
</template>