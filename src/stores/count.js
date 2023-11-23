import { defineStore } from 'pinia';

export default defineStore("count", {
    state() {
        return {
            gungon: [],
            gginfo:[],
            
        }
    },
    getters: {
        gunganName() {
            return this.gungon
        },
        
    },
    actions:{
        getGungon(){
            fetch("https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c")
            .then(res=>res.json())
            .then(data=>{
                this.gginfo = data;
                console.log(this.gginfo)
            })
        }
    }
})