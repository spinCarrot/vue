<script>
import { mapState, mapActions } from 'pinia'
import infor from '../stores/count'

export default {
    data() {
        return {
            tr: "",
            bin: [],
        }
    },
    computed: {
        ...mapState(infor, ["gungon", "ggadress", "ggname", "locat", "lugon", "minzu"])
    },
    methods: {
        ...mapActions(infor, ["getGungon", "getLugon", "getMinzu"]),
        pppp() {
            // const pop = document.getElementById("ccz")
            const btns = document.querySelectorAll("button[type='button']")
            btns.forEach(item => {
                item.addEventListener('click', () => {

                    this.getGungon(item.value)
                })
            })
            // this.getGungon(btns.value)
        },
        test() {
            const id = document.getElementById("ccz")
            console.log(this.bin)
            this.bin.data.forEach((item, index) => {
                if (item.鄉鎮 == id.value) {
                    console.log(item)
                }
            })
        }
    },
    created() {
        this.getGungon()
        const body = document.querySelector("body")
        body.addEventListener("mouseover",()=>{
            if(this.bin.length == 0){
                this.bin = this.lugon
                console.log(this.bin)
            }
        
            
        })
    }
}
</script>

<template>
<<<<<<< HEAD
    <!-- <p>{{ this.bin }}</p> -->
    <button type="button" @click="test()">Btn</button>
    <button type="button" value="前鎮" @click="this.pppp()" id="ccz">前鎮</button>
    <p>{{ this.ggname }}</p>
    <button type="button" value="苓雅" @click="this.pppp(this.tr)">鳳山</button>
    <p>{{ this.ggname }}</p>
=======
    <select class="sel1" name="" id="" value="">
        <option value="">區</option>
<option value="">1</option>
<option value="">2</option>
    </select>

    <select class="sel2" name="" id="" value="">
        <option value="">類型</option>
<option value="">1</option>
<option value="">2</option>
    </select>

    <div class="block"></div>


    <div class="block2">
        <div class="message"></div>
        <div class="map"></div>
    </div>
    <!-- <button type="button" value="前鎮" @click="getGungon()">前鎮</button>
    <p>{{ this.ggname }}</p>
    <button type="button" @click="getLugon()">鳳山</button>
    <p>{{ this.lugon }}</p>
>>>>>>> 77e6b7f666579a7a5803876a0eac90fe17336911
    <button type="button" @click="getMinzu()">左營</button>
     -->
</template>

<<<<<<< HEAD
<style scoped lang="scss"></style>
=======
<style scoped lang="scss">
.sel1{
    width: 200px;
    height: 30px;
    position: absolute;
    top: 200px;
    left: 100px;
}
.sel2{
    width: 200px;
    height: 30px;
    position: absolute;
    top: 240px;
    left: 100px;
}

.block{
    width: 300px;
    height: 500px;
    border:  1px solid black;
    background-color: white;
    position: absolute;
    top: 300px;
    left: 100px;
}

.block2{
    width: 800px;
    height: 550px;

    position: absolute;
    top: 250px;
    left: 450px;
}
.message{
    width: 800px;
    height: 100px;
    border:  1px solid black;
}
.map{
    width: 800px;
    height: 450px;
    border:  1px solid black;
}
</style>
>>>>>>> 77e6b7f666579a7a5803876a0eac90fe17336911
