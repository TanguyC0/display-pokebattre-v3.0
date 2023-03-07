<script setup>
    import { ref } from 'vue';
    import { choseBgColor } from '../utils/choseColor.js';

    const nbAvatar = ref(20);
    const lstColor = ref(['red','blue','green','yellow','purple','pink','orange','gray','black','white']);
</script>

<template>
    <section class="h-full w-full flex">
            <section class="border rounded-xl w-2/3 mr-2 h-full text-center text-white text-2xl">
                <h2>Data user</h2>
                <div class="flex flex-col p-5">
                    <label for="name" class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">name</span>
                        <input type="text" id="name" class="text-black rounded-xl pl-3 w-1/2">
                        <button type="submit">submit</button>
                    </label>
                    <label for="mail" class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">mail</span>
                        <input type="text" id="mail" class="text-black rounded-xl pl-3 w-1/2">
                        <button type="submit">submit</button>
                    </label>
                    <div class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">langue</span>
                        <label for="fr" class="border border-2 rounded-full" :class="{'border-red-500' : false}">
                            <img src="src/assets/flag/fr.png" alt="fr" class="h-16 w-16">
                            <input type="radio" name="lng" id="fr" class="hidden">
                        </label>
                        
                        <label for="en" class="border border-2 rounded-full" :class="{'border-red-500' : true}">
                            <img src="src/assets/flag/en.png" alt="en" class="h-16 w-16">
                            <input type="radio" name="lng" id="en" class="hidden">
                        </label>
                    </div>
                </div>
                
            </section>
            <section class="border rounded-xl w-1/2 ml-2 h-full text-center text-white text-2xl">
                <h2 class="font-xl">personalisation</h2>
                <div class=" m-5">
                    <h3 class=" m-5">color glass</h3>
                    <ul class="flex justify-evenly flex-wrap gap-2">
                        <li v-for="i in lstColor" class="bg-white text-black rounded-full h-20 w-20" :class="choseBgColor(i)">
                        </li>
                    </ul>
                </div>
                <div class=" m-5">
                    <h3 class=" m-5">avatar</h3>
                    <ul class="flex justify-evenly flex-wrap gap-2">
                        <li v-for="i in nbAvatar" class="bg-white text-black rounded-full">
                            <img :src="`src/assets/avatar/${i}.png`" :alt="`avatar ${i}`" class="h-20 w-20 rounded-full">
                        </li>
                    </ul>
                </div>
            </section>
        </section>
</template>