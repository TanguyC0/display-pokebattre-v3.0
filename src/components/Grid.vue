<script setup>
    const props = defineProps({
        displayType: {
            type: String,
            default: 'pokemon'
        }
    })
</script>

<template>
    <section class="border p-6 rounded-lg overflow-y-scroll">
        <h2 class="text-3xl font-bold text-center pb-6 text-white"><slot></slot></h2>
        <ul class="grid grid-cols-4 gap-4 wrap ">
            <template v-for="n in 60">
                <li class="h-32 w-32 hover:bg-violet-300 bg-white border border-gray-300 rounded-lg shadow active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 relative">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="item" class="absolute">
                    <em v-if="displayType == 'item'" class="absolute bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center">2</em>
                </li>
            </template>
        </ul>
    </section>
</template>