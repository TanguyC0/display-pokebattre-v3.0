<script setup>
    import Jauge from './Jauge.vue';
    import Glass from './Glass.vue';
    import { onMounted } from 'vue';
    import { i18nextPromise } from '../i18n.js'

    onMounted(async () => {
        await i18nextPromise
    })
</script>

<template>
        <Glass class="h-fit p-1">
            <router-link to="/" class="rounded-full w-14 h-14">
                <img src="src/assets/logo/logo.png" alt="">
            </router-link>
            <Jauge :color="'blue'" :pourcent="50" >{{ $t('hero.level') }}: 1 </Jauge>
            <Jauge :color="'yellow'" :pourcent="100">{{ $t('hero.money') }}: 500£ </Jauge>
            <Jauge :color="'red'" :pourcent="50">{{ $t('hero.energy') }}: 100/100 </Jauge>
            <Jauge :color="'purple'" :pourcent="50">{{ $t('hero.box') }}: 10/20 </Jauge>
            <router-link to="/dashboard" class="rounded-full bg-white w-14 h-14">
                <img src="src/assets/logo/player.png" alt="">
            </router-link>
        </Glass>
        

</template>