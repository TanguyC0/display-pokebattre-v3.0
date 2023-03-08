<script setup>
    import Glass from '../components/Glass.vue';
    import DashboardUser from '../components/DashboardUser.vue';
    import DashboardAdmin from '../components/DashboardAdmin.vue';
    import DashboardItem from '../components/DashboardItem.vue';
    import DashboardStage from '../components/DashboardStage.vue';
    import { ref, onMounted } from 'vue';
    import { i18nextPromise } from '../i18n.js'

    onMounted(async () => {
        await i18nextPromise
    })

    const page = ref('user data');
</script>

<template>
    <Glass class="w-full mt-5 p-5 flex-col">
        <nav class="w-full mb-5">
            <ul class="flex flex-row justify-around text-white">
                <li @click="page = 'user data'" :class="{'underline' : page == 'user data'? true : false}">
                    {{$t('dashboard.user')}}
                </li>
                <li @click="page = 'admin user'" :class="{'underline' : page == 'admin user'? true : false}">
                    {{$t('dashboard.admin')}}
                </li>
                <li @click="page = 'admin item'" :class="{'underline' : page == 'admin item'? true : false}">
                    {{$t('dashboard.item')}}
                </li>
                <li @click="page = 'admin stage'" :class="{'underline' : page == 'admin stage'? true : false}">
                    {{$t('dashboard.stage')}}
                </li>
            </ul>
        </nav>
        <DashboardUser v-if="page == 'user data'"/>
        <DashboardAdmin v-if="page == 'admin user'"/>
        <DashboardItem v-if="page == 'admin item'"/>
        <DashboardStage v-if="page == 'admin stage'"/>
    </Glass>
</template>