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
    <div class="linkBtn home">
        <RouterLink to="/" class="link">首頁</RouterLink>
    </div>
    <div class="linkBtn visit">
        <RouterLink to="/Visit" class="link">觀光</RouterLink>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Emblem_of_Kaohsiung_City.svg/750px-Emblem_of_Kaohsiung_City.svg.png" alt="" class="logo">
    <div class="linkBtn life">
        <RouterLink to="/Life" class="link">住宿</RouterLink>
    </div>
    <div class="linkBtn transport">
        <RouterLink to="/Transport" class="link">交通</RouterLink>
    </div>

    
</div>

</template>

<style scoped lang="scss">
.headerShow{
    background-color: rgb(195, 230, 254);
    position: fixed;
    position: relative;
    padding-top: 15px;
    
    .logo{
        width: 100px;
        height: 120px;
        position: absolute;
        left: 46%;

    }

    .linkBtn{
        width: 200px;
        height: 80px;
        background-color: azure;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 61px;
        border-style:dashed ;
        border-color:rgb(254,239,195);

        .link{
            text-decoration: none;
            font-size: 35px;
            font-weight: 700;
        }
    }
    .home{
        position: absolute;
        left: 250px;
    }
    .visit{
        position: absolute;
        left: 450px;
    }
    .life{
        position: absolute;
        left: 850px;
    }
    .transport{
        position: absolute;
        left: 1050px;
    }
}
</style>