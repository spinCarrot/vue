<script>
import { mapState, mapActions } from 'pinia'
import infor from '../stores/count'

export default {
    data() {
        return {
            tr: "",
            bin: [],
            lug: [],
            mipluse: [],
            lupluse: [],
            ggpluse: [],
            chh: ["左營", "鼓山", "三民", "苓雅", "新興", "前金", "鹽埕", "旗津", "小港", "鳳山", "茂林", "甲仙", "六龜", "杉林", "內門", "仁武", "田寮", "旗山", "梓官", "阿蓮", "湖內", "茄萣", "路竹", "鳥松", "永安", "燕巢", "大樹", "大寮", "彌陀", "橋頭", "大社", "那瑪夏", "桃源", "楠梓", "前鎮", "美濃", "岡山", "林園",],
            lutype: "",
            chname: ""


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

        },

        selectlu() {
            if (this.lutype == "民宿") {
                this.lupluse=[]
                this.ggpluse=[]
                if (this.lutype == "民宿" && this.chname !== "") {
                    this.mipluse=[]
                    this.minzu.data.forEach(item => {
                        if (item.地址.includes(this.chname)) {
                            this.mipluse.push(item.旅宿名稱)
                            
                        }

                    })
                    console.log(this.mipluse)
                }

            };
            if (this.lutype == "觀光旅館") {
                console.log(this.gungon)
                this.mipluse=[]
                this.lupluse=[]
                if (this.lutype == "觀光旅館" && this.chname !== "") {
                    this.ggpluse=[]
                    this.gungon.forEach(item => {
                        if (item.地址.includes(this.chname)) {
                            this.ggpluse.push(item.觀光旅館名稱)
                            
                        }

                    })
                    console.log(this.ggpluse)
                }

            };
            if (this.lutype == "旅館") {
                console.log(this.lugon)
                this.mipluse=[]
                this.ggpluse=[]
                if (this.lutype == "旅館" && this.chname !== "") {
                    this.lupluse=[]
                    this.lugon.data.forEach(item => {
                        if (item.地址.includes(this.chname)) {
                            this.lupluse.push(item.旅宿名稱)
                            
                        }

                    })
                    console.log(this.lupluse)
                }

            };
            

        }

    },
    created() {
        this.getGungon()
        const body = document.querySelector("body")
        body.addEventListener("mousemove", () => {
            if (this.bin.length == 0) {
                this.bin = [this.lugon, this.gungon, this.minzu]
                console.log(this.bin)
            }
        })

        console.log(this.bin)

    },

}
</script>

<template>
    



    <select class="sel1" @click="selectlu()" name="" id="" v-model="lutype">
        <option value="觀光旅館">觀光旅館</option>
        <option value="民宿">民宿</option>
        <option value="旅館">旅館</option>
    </select>

    <select class="sel2" name="" @click="selectlu()" id="" v-model="chname" v-show="lutype !== ''">
        <option v-for="item in chh">{{ item }}</option>




    </select>

    <div class="block">
        <p>{{this.mipluse }}</p>
        <p>{{ this.ggpluse }}</p>
        <p>{{ this.lupluse }}</p>
    </div>


    <div class="block2">
        <div class="message">
            <p>{{  }}</p>
        </div>
        <div class="map"></div>
    </div>
    
</template>

<style scoped lang="scss">
.sel1 {
    width: 200px;
    height: 30px;
    position: absolute;
    top: 200px;
    left: 100px;
}

.sel2 {
    width: 200px;
    height: 30px;
    position: absolute;
    top: 240px;
    left: 100px;
}

.block {
    width: 300px;
    height: 500px;
    border: 1px solid black;
    background-color: white;
    position: absolute;
    top: 300px;
    left: 100px;
}

.block2 {
    width: 800px;
    height: 550px;

    position: absolute;
    top: 250px;
    left: 450px;
}

.message {
    width: 800px;
    height: 100px;
    border: 1px solid black;
}

.map {
    width: 800px;
    height: 450px;
    border: 1px solid black;
}
</style>
