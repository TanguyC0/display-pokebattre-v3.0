<script setup>
    import Glass from './Glass.vue';
    import Grid from './Grid.vue';
    import { defineEmits } from 'vue';

    const emit = defineEmits(['back']);

</script>

<template>
    
    <Glass class="flex-col h-full px-5 py-10">
        <header class="flex w-full text-center text-3xl mb-5">
            <h1 class="grow ">Bag</h1>
            <em class="w-10 font-bold text-white" @click="emit('back','home')">x</em>
        </header>
        <section class="flex justify-around h-full w-full">
            <section class="h-1/2 flex flex-col justify-between">
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">grid</div>
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">filter</div>
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">sell</div>
            </section>
            <Grid :displayType="'item'"></Grid>
        </section>
    </Glass>

</template>