<script setup>
    import Glass from '../components/Glass.vue';
    import DashboardUser from '../components/DashboardUser.vue';
    import DashboardAdmin from '../components/DashboardAdmin.vue';
    import DashboardItem from '../components/DashboardItem.vue';
    import DashboardStage from '../components/DashboardStage.vue';
    import { ref } from 'vue';

    const page = ref('user data');
</script>

<template>
    <Glass class="w-full mt-5 p-5 flex-col">
        <nav class="w-full mb-5">
            <ul class="flex flex-row justify-around text-white">
                <li @click="page = 'user data'" :class="{'underline' : page == 'user data'? true : false}">
                    user data
                </li>
                <li @click="page = 'admin user'" :class="{'underline' : page == 'admin user'? true : false}">
                    admin user
                </li>
                <li @click="page = 'admin item'" :class="{'underline' : page == 'admin item'? true : false}">
                    admin item
                </li>
                <li @click="page = 'admin stage'" :class="{'underline' : page == 'admin stage'? true : false}">
                    admin stage
                </li>
            </ul>
        </nav>
        <DashboardUser v-if="page == 'user data'"/>
        <DashboardAdmin v-if="page == 'admin user'"/>
        <DashboardItem v-if="page == 'admin item'"/>
        <DashboardStage v-if="page == 'admin stage'"/>
    </Glass>
</template>