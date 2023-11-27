<script>
import { mapState, mapActions } from 'pinia'
import infor from '../stores/count'

export default {
    data() {
        return {
            // const butto=document.querySelectorAll("button[type='button']")
        butto:"",
        }
    },
    computed: {
        ...mapState(infor, ["gungon", "ggadress", "ggname", "locat","lugon","minzu"])
    },
    methods: {
        ...mapActions(infor, ["getGungon","getLugon","getMinzu"]),
        pppp(){
            const pop = document.getElementById("ccz")
            this.getGungon(pop.value)
        }
    }
}
</script>

<template>
    
    <button type="button" value="前鎮" @click="getGungon(a)" id="ccz">前鎮</button>
    <p>{{ this.ggname }}</p>
    <button type="button" @click="getLugon()">鳳山</button>
    <!-- <p>{{ this.lugon }}</p> -->
    <button type="button" @click="getMinzu()">左營</button>
</template>

<style scoped lang="scss">
</style>