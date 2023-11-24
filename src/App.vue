<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/header.vue";
</script>


<template>
    <div class="header">
    <Header />
</div>
<div class="content">
    <RouterView />
</div>
</template>

<style scoped lang="scss">
.header{
    width: 100vw;
    height: 20vh;
    background-color: #daa0a0;
}

.content{
    width: 100vw;
    height: 80vh;
    
}
</style>
