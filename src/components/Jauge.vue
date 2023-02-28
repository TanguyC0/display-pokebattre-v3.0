<script setup>
    import { toRefs } from 'vue';

    const props = defineProps({
        color: {
            type: String,
            default: 'red'
        },
        pourcent: {
            type: Number,
            default: 50
        }
    });

    const { color, pourcent } = toRefs(props);

    const fixColorBG = () => {
        switch (color.value) {
            case 'red':
                return 'bg-red-500';
            case 'yellow':
                return 'bg-yellow-500';
            case 'green':
                return 'bg-green-500';
            case 'blue':
                return 'bg-blue-500';
            case 'purple':
                return 'bg-purple-500';
        }
    }

    const fixColorBorder = () => {
        switch (color.value) {
            case 'red':
                return 'border-red-500';
            case 'yellow':
                return 'border-yellow-500';
            case 'green':
                return 'border-green-500';
            case 'blue':
                return 'border-blue-500';
            case 'purple':
                return 'border-purple-500';
        }
    }

</script>

<template>
    <div class="shadow w-1/5 bg-white h-9 m-2 rounded-xl border-2 relative" :class="fixColorBorder()">
        <div class="h-8 rounded-lg absolute" :class="fixColorBG()" :style="`width: ${pourcent}%`"></div>
        <p class="absolute text-xs leading-none p-3 text-center text-white">
            <slot/>
        </p>
    </div>
</template>