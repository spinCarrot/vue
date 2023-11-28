import { defineStore } from 'pinia';

export default defineStore("count", {
    state() {
        return {
            gungon: [],
            ggadress: [],
            ggname: [],
            locat: [],
            lugon: [],
            minzu: [],
            
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
    actions: {
        getGungon(a) {
            fetch("https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88")
                .then(res => res.json())
                .then(obj => {

                    this.gungon = obj.data;
                    console.log(obj);
                    // console.log(this.gungon)


                    this.gungon.forEach(item => {
                        
                        if (item.地址.includes(a)) {
                            this.ggname.push(item.觀光旅館名稱)
                            console.log(item.觀光旅館名稱);
                            console.log(this.ggname);
                        };
                    
                        // this.ggadress.push(item.地址)
                    })
                    // this.gungon.data.forEach(item =>{
                    //     this.ggname.push(item.觀光旅館名稱)
                    // }),
                    // console.log(this.ggadress)
                    // console.log(this.ggname)
                })
            fetch("https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c")
                .then(res => res.json())
                .then(obj1 => {
                    this.lugon = obj1,
                        console.log(this.lugon)
                })
            fetch("https://api.kcg.gov.tw/api/service/Get/0696fe30-a7b7-42f7-9458-f4716138109d")
                .then(res => res.json())
                .then(obj2 => {
                    this.minzu = obj2,
                        console.log(this.minzu)
                })
        },
        getLugon() {

        },
        getMinzu() {

        }
    }
})

