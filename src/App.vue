<script setup>
    import Hero from './components/Hero.vue';

</script>

<template>
    <div class="h-full portrait:hidden">
        <Hero />
        <main class="flex  justify-center h-[92%]">
    
            <router-view></router-view>
        </main>

    </div>
    <div class="flex flex-col justify-around items-center bg-red-500 bg-opacity-50 border rounded-2xl h-full landscape:hidden">
        <h1 class="text-5xl font-bold text-center shadow-xl">Rotate your device</h1>
    </div>

</template>
