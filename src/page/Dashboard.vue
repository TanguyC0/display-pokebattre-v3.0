<script setup>
    import Glass from '../components/Glass.vue';
</script>

<template>
    <Glass class="w-full mt-5 p-5 flex-col">
        <nav class="w-full mb-5">
            <ul class="flex flex-row justify-around text-white">
                <li>
                    user data
                </li>
                <li>
                    user admin
                </li>
                <li>
                    item admin
                </li>
                <li>
                    stage admin
                </li>
            </ul>
        </nav>
        <section class="h-full w-full flex">
            <section class="border rounded-xl w-2/3 mr-2 h-full text-center text-white text-2xl">
                <h2>Data user</h2>
                <div class="flex flex-col p-5">
                    <label for="name" class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">name</span>
                        <input type="text" id="name" class="text-black rounded-xl pl-3 w-1/2">
                        <button type="submit">submit</button>
                    </label>
                    <label for="mail" class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">mail</span>
                        <input type="text" id="mail" class="text-black rounded-xl pl-3 w-1/2">
                        <button type="submit">submit</button>
                    </label>
                    <div class="w-1/2 flex justify-between p-2">
                        <span class="w-1/4 text-left">langue</span>
                        <label for="fr">
                            <img src="src/assets/flag/fr.png" alt="fr">
                            <input type="radio" name="lng" id="fr">
                        </label>
                        
                        <label for="fr">
                            <img src="src/assets/flag/en.png" alt="en">
                            <input type="radio" name="lng" id="en">
                        </label>
                    </div>
                </div>
                
            </section>
            <section class="border rounded-xl w-1/2 ml-2 h-full text-center text-white text-2xl">
                <h2>personalisation</h2>
            </section>
        </section>
    </Glass>
</template>