<script setup>
    import Hero from './components/Hero.vue';
    import Logo from './components/Logo.vue';
    import Glass from './components/Glass.vue';
    import Team from './components/Team.vue';
    import Bag from './components/Bag.vue';
    import Shop from './components/Shop.vue';
    import Box from './components/Box.vue';

    import { ref } from 'vue';

    const centerDisplay = ref('home');


</script>

<template>
    <div class="h-full portrait:hidden">
        <Hero />
        <main class="flex h-[92%]">
            <Glass class="w-1/12 my-5 flex-col">
                <Logo :image="'aventure'" >Adventure</Logo>
                <Logo :image="'team'" @click="centerDisplay = 'team'">Team</Logo>
                <Logo :image="'bag'" @click="centerDisplay = 'bag'">Bag</Logo>
                <Logo :image="'shop'" @click="centerDisplay = 'shop'">Shop</Logo>
                <Logo :image="'box'" @click="centerDisplay = 'box'">Box</Logo>
            </Glass>
            <section class="grow m-5">
                <Team v-if="centerDisplay == 'team'" />
                <Bag v-if="centerDisplay == 'bag'" />
                <Shop v-if="centerDisplay == 'shop'" />
                <Box v-if="centerDisplay == 'box'" />
                <div v-if="centerDisplay == 'home'" class="h-full flex justify-center items-center">
                    <img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="">
                </div>
            </section>
            <Glass class="w-1/12 my-5 flex-col">
                <Logo :image="'event'">Event 1</Logo>
                <Logo :image="'event'">Event 2</Logo>
                <Logo :image="'event'">Event 3</Logo>
            </Glass>
        </main>
    </div>
    <div class="flex flex-col justify-around items-center bg-red-500 bg-opacity-50 border rounded-2xl h-full landscape:hidden">
        <h1 class="text-5xl font-bold text-center shadow-xl">Rotate your device</h1>
    </div>
    
</template>