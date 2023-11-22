<script >
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{
        }
    },
    components:{
        RouterLink,
    }
}
</script>

<template>
<div class="headerShow">
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/Visit">觀光</RouterLink>
    <RouterLink to="/Life">住宿</RouterLink>
    <RouterLink to="/Transport">交通</RouterLink>

    
</div>

</template>

<style scoped lang="scss">
.headerShow{
    background-color: rgb(195, 230, 254);
}
*{
    font-size: 35px;
}
</style>