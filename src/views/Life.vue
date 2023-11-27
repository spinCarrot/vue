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
    <!-- <p>{{ this.bin }}</p> -->
    <button type="button" @click="test()">Btn</button>
    <button type="button" value="前鎮" @click="this.pppp()" id="ccz">前鎮</button>
    <p>{{ this.ggname }}</p>
    <button type="button" value="苓雅" @click="this.pppp(this.tr)">鳳山</button>
    <p>{{ this.ggname }}</p>
    <button type="button" @click="getMinzu()">左營</button>
</template>

<style scoped lang="scss"></style>