<script setup>
    const props = defineProps({
        image: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="text-center font-bold text-white flex flex-col justify-center items-center">
        <div class="w-5/6">
            <img :src="`src/assets/logo/${image}.png`" alt="button">
        </div>
        <slot/>
    </div>
</template>