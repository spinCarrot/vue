import { defineStore } from 'pinia';

<<<<<<< HEAD
export default defineStore("count", {
    state() {
        return {
            gungon: [],
            ggadress:[],
            ggname:[],
            locat:[],
            lugon:[],
            minzu:[],
            butto:"",
        }
    },
    getters: {
        gunganTotel() {
            return this.gungon
        },
        lugonTotel() {
            return this.lugon
        },
        minzuTotel() {
            return this.minzu
        },
        // gunganAdress(){
        //     return this.ggadress
        // },
        // gunganName(){
        //     return this.ggname
        // },
        // setLocation(){
        //     return this.locat
        // }

        
    },
    actions:{
        getGungon(){
            // const btns = document.querySelectorAll("button[type='button']")
            fetch("https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88")
            .then(res=>res.json())
            .then(obj=>{
                
                this.gungon = obj.data;
                console.log(obj);
                // console.log(this.gungon)
                
                
                this.gungon.forEach(item =>{
                    // this.butto=document.querySelectorAll("button[type='button']");
                    // console.log(item)
                    if(item.地址.includes("前鎮")){
                        this.ggname.push(item.觀光旅館名稱)
                        console.log(item.觀光旅館名稱);
                        }
                    // this.ggadress.push(item.地址)
                })
                // this.gungon.data.forEach(item =>{
                //     this.ggname.push(item.觀光旅館名稱)
                // }),
                // console.log(this.ggadress)
                // console.log(this.ggname)
            })
        },
        getLugon(){
            fetch("https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c")
            .then(res=>res.json())
            .then(obj1=>{
                this.lugon=obj1,
                console.log(this.lugon)
            })
        },
        getMinzu(){
            fetch("https://api.kcg.gov.tw/api/service/Get/0696fe30-a7b7-42f7-9458-f4716138109d")
            .then(res=>res.json())
            .then(obj2=>{
                this.minzu=obj2,
                console.log(this.minzu)
            })
        }
    }
})
=======

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



>>>>>>> 7dbd13b666a35fd040e0cf4933b7b32bacfd4dd5
