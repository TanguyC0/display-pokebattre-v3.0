<script setup>
    import Glass from './Glass.vue';
    import Grid from './Grid.vue';

</script>

<template>
    <Glass class="flex-col h-full px-5 py-10">
        <header class="flex w-full text-center text-3xl mb-5">
            <h1 class="grow ">Box</h1>
            <em class="w-10 font-bold">x</em>
        </header>
        <section class="flex justify-around h-full w-full">
            <section class="h-1/3 flex flex-col justify-between">
                <div class="bg-blue-500 w-20 h-1/4 flex items-center justify-center rounded-xl border-2 text-white">grid</div>
                <div class="bg-blue-500 w-20 h-1/4 flex items-center justify-center rounded-xl border-2 text-white">filter</div>
                <div class="bg-blue-500 w-20 h-1/4 flex items-center justify-center rounded-xl border-2 text-white">sell</div>
            </section>
            <Grid></Grid>
            
            <section class=" w-2/5 bg-white text-center flex flex-col items-center">
                <h2 class="text-3xl font-bold">data of the pokemon</h2>
                <h3 class="text-2xl font-semibold">name</h3>
                <p class="font-semibold">type</p>
                <div class="flex">
                    <img src="" alt="" class="h-20 w-20 bg-blue-500">
                    <img src="" alt="" class="h-20 w-20 bg-blue-500">
                </div>
                <p class="font-semibold">level 1</p>
                <p class="font-semibold">exp 100/101</p>
                <p class="font-semibold">hp 100/100</p>
                <p class="font-semibold">attack 100</p>
                <p class="font-semibold">defense 100</p>
            </section>
        </section>
    </Glass>

</template>