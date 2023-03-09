<script setup>
    import Glass from './Glass.vue';
    import Grid from './Grid.vue';
    import { defineEmits, onMounted } from 'vue';
    import { i18nextPromise } from '../i18n.js'

    onMounted(async () => {
        await i18nextPromise
    })

    const emit = defineEmits(['back']);
</script>

<template>
    <Glass class="flex-col h-full px-5 py-10">
        <header class="flex w-full text-center text-3xl mb-5">
            <h1 class="grow ">{{ $t('menu.box') }}</h1>
            <em class="w-10 font-bold" @click="emit('back','home')">x</em>
        </header>
        <section class="flex justify-around h-full w-full">
            <section class="h-1/2 flex flex-col justify-between">
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">grid</div>
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">{{ $t('interface.filter') }}</div>
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">{{ $t('interface.fav') }}</div>
                <div class="bg-blue-500 w-28 h-1/5 flex items-center justify-center rounded-xl border-2 text-white">{{ $t('interface.sell') }}</div>
            </section>
            <Grid class=""></Grid>
            
            <section class=" w-2/5 bg-white text-center flex flex-col items-center">
                <h2 class="text-3xl font-bold">{{ $t('interface.data.title') }}</h2>
                <h3 class="text-2xl font-semibold">name</h3>
                <p class="font-semibold">{{$t('interface.data.type') }}</p>
                <div class="flex">
                    <img src="" alt="" class="h-20 w-20 bg-blue-500">
                    <img src="" alt="" class="h-20 w-20 bg-blue-500">
                </div>
                <p class="font-semibold">{{$t('interface.data.level') }} 1</p>
                <p class="font-semibold">{{$t('interface.data.exp') }} 100/101</p>
                <p class="font-semibold">{{$t('interface.data.hp') }} 100/100</p>
                <p class="font-semibold">{{$t('interface.data.attack') }} 100</p>
                <p class="font-semibold">{{$t('interface.data.defense') }} 100</p>
            </section>
        </section>
    </Glass>

</template>