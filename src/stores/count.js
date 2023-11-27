import { defineStore } from 'pinia';


export default defineStore("count", {
    state() {
        return {
            add: [],
            name: [],
            dot:[],
            fac:[],
        }
    },
    getters: {
        getadds() {
            return this.add
        },
        getdot(){
            return this.dot
        },
        getfac(){
            return this.fac
        }
    },
    actions: {
        getAdds() {
            fetch("https://api.kcg.gov.tw/api/service/Get/82c544fa-ec50-4dea-8e8c-d8041abe8dee")
                .then(res => res.json())
                .then(data => {
                    this.add = data;
                    console.log(this.add);
                    // this.add.data.forEach(item=>{
                    //     this.name.push(item.古蹟名稱)
                    // }),
                    
                    
                    // btns = document.querySelectorAll("button[type='button']")
                    // btns.forEach(item => {
                    //     item.addEventListener('click', () => {
                    //         if (item.位置.includes(btns)) {
                    //             console.log(item.古蹟名稱)

                    //         }
                    //     })
                    // })
                })
        },
        getDot(){
            fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
            .then(res => res.json())
            .then(obj =>{
                this.dot= obj
                console.log(this.dot)
            })
        },
        getFac(){
            fetch("https://api.kcg.gov.tw/api/service/Get/051bd077-c051-4321-a88b-e9d513ef3508")
            .then(res => res.json())
            .then(obj1 =>{
                this.fac= obj1
                console.log(this.fac)
            })
        }
    }
})



