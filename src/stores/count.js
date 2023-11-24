import { defineStore } from 'pinia';


export default defineStore("count", {
    state() {
        return {
            add: [],
            name:[],
        }
    },
    getters: {
        getadd() {
            return this.add
        }
    },
    actions: {
        getadds(x) {
            fetch("https://api.kcg.gov.tw/api/service/Get/82c544fa-ec50-4dea-8e8c-d8041abe8dee")
                .then(res => res.json())
                .then(data => {
                    this.add = data;
                    console.log(this.add.data);
                    this.add.data.forEach(item=>{
                        this.name.push(item.古蹟名稱)
                    }),
                    console.log(this.name);
                    console.log(x)
                })
        }
    }
})



