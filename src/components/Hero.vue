<script setup>
    import Jauge from './Jauge.vue';
    import Glass from './Glass.vue';
</script>

<template>
        <Glass class="h-fit p-1">
            <router-link to="/" class="rounded-full w-14 h-14">
                <img src="src/assets/logo/logo.png" alt="">
            </router-link>
            <Jauge :color="'blue'" :pourcent="50" >level: 1 </Jauge>
            <Jauge :color="'yellow'" :pourcent="100">money: 500£ </Jauge>
            <Jauge :color="'red'" :pourcent="50">energy: 100/100 </Jauge>
            <Jauge :color="'purple'" :pourcent="50">box: 10/20 </Jauge>
            <div class="rounded-full bg-white w-14 h-14">
                <img src="src/assets/logo/player.png" alt="">
            </div>
        </Glass>
        

</template>