<script setup>
    import Glass from '../components/Glass.vue';
    import { ref } from 'vue';


    const status = ref('fight');
</script>

<template>
    <div>
        <section class="flex flex-row">
            <Glass class="h-1/2 p-4 my-4">
                <section class=" h-fit border p-5 rounded-lg">
                    <h2 class="text-3xl font-bold text-center pb-5 text-white">Your Team</h2>
                    <ul class="grid grid-cols-3 gap-4 wrap ">
                        <template v-for="n in 6">
                            <li class="h-32 w-32 hover:bg-violet-300 bg-white border border-gray-300 rounded-lg shadow  active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 ">
                                <img src="" alt="item" class="w-full justify-center">
                            </li>
                        </template>
                    </ul>
                </section>
            </Glass>

            <Glass class="h-1/2 p-4 my-4 mx-4">
                <section class="w-[30rem] h-80 border rounded-lg bg-no-repeat bg-[url('src/assets/map/map.jpg')]">
                    <div class=" bg-purple-500 w-5 h-5 rounded-full relative" :style="`top : ${50}%; left: ${25}%`"></div>
                </section>
            </Glass>

            <Glass class="h-1/2 p-4 my-4">
                    <section class=" h-fit border p-5 rounded-lg">
                        <h2 class="text-3xl font-bold text-center pb-5 text-white">adversaire Team</h2>
                    <ul class="grid grid-cols-3 gap-4 wrap ">
                        <template v-for="n in 6">
                            <li class="h-32 w-32 hover:bg-violet-300 bg-white border border-gray-300 rounded-lg shadow  active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 ">
                                <img src="" alt="item" class="w-full justify-center">
                            </li>
                        </template>
                    </ul>
                </section>
            </Glass>
        </section>
        <section class="flex w-full ">
            <Glass class="h-1/2 w-1/2 p-4 m-2">
                <section class="w-full flex justify-between">
                    <div class="flex justify-left">
                        <div class="bg-blue-500 w-32 h-16 m-5 border rounded-xl flex items-center justify-center">
                            walk
                        </div>
                        <div v-if="status == 'fight'" class="bg-blue-500 w-32 h-16 m-5 border rounded-xl flex items-center justify-center">
                            fight
                        </div>
                        <div v-if="status == 'catch'" class="bg-blue-500 w-32 h-16 m-5 border rounded-xl flex items-center justify-center">
                            catch
                        </div>
                    </div>
                    <div class="h-60 w-60 bg-white"></div>
                </section>
            </Glass>
            <Glass class="h-1/2 w-1/2 p-4 m-2">
                <section class="w-full h-full flex flex-col items-center">
                    <h2 class="text-3xl font-bold pb-5 text-white">Items</h2>
                    <nav class="flex">
                        <div class="h-48 w-10 m-1 bg-white text-3xl font-bold flex justify-center items-center">←</div>
                        <div class="h-48 w-48 m-1 bg-white"></div>
                        <div class="h-48 w-48 m-1 bg-white"></div>
                        <div class="h-48 w-48 m-1 bg-white"></div>
                        <div class="h-48 w-10 m-1 bg-white text-3xl font-bold flex justify-center items-center">→</div>
                    </nav>
                </section>
            </Glass>
        </section>
    </div>
</template>