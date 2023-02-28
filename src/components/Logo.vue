<script setup>
    const props = defineProps({
        image: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="text-center font-bold text-white">
        <div class="w-28 h-28">
            <img :src="`src/assets/logo/${image}.png`" alt="button">
        </div>
        <slot/>
    </div>
</template>