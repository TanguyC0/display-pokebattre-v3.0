<script setup>
    import Jauge from './Jauge.vue';
    import Glass from './Glass.vue';
</script>

<template>
        <Glass class="h-[8%]">
            <div class="rounded-full bg-white p-7"></div>
            <Jauge :color="'blue'" :pourcent="50" >level: 1 </Jauge>
            <Jauge :color="'yellow'" :pourcent="100">money: 500£ </Jauge>
            <Jauge :color="'red'" :pourcent="50">energy: 100/100 </Jauge>
            <Jauge :color="'purple'" :pourcent="50">box: 10/20 </Jauge>
            <div class="rounded-full bg-white p-7"></div>
        </Glass>
        

</template>