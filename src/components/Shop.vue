<script setup>
    import Glass from './Glass.vue';
    import Grid from './Grid.vue';

    const emit = defineEmits(['back']);
</script>

<template>
    <Glass class="flex-col h-full px-5 py-10">
        <header class="flex w-full text-center text-3xl mb-5">
            <h1 class="grow ">Shop</h1>
            <em class="w-10 font-bold" @click="emit('back','home')">x</em>
        </header>
        <section class="flex justify-around h-full w-full">
            <section class="h-1/2 flex flex-col justify-between">
                <div class="bg-blue-400 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">filter</div>
                <div class="bg-blue-400 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">buy</div>
                <div class="bg-blue-400 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">buy all</div>
                <div class="bg-blue-400 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">sell</div>
            </section>
            <section class=" h-fit border p-6 rounded-lg">
                <h2 class="text-3xl font-bold text-center pb-6 text-white">Stock</h2>
                <ul class="grid grid-cols-3 gap-4 wrap ">
                    <template v-for="n in 9">
                        <li class="h-32 w-32 hover:bg-violet-300 bg-white border border-gray-300 rounded-lg shadow  active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 ">
                            <img src="" alt="item" class="w-full justify-center">
                        </li>
                    </template>
                </ul>
            </section>
            <Grid>Bag</Grid>
        </section>
    </Glass>

</template>