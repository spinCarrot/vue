import { defineStore } from 'pinia';

export default defineStore("count", {
    state() {
        return {
            add: [],
            name: [],
            dot: [],
            fac: [],
        }
    },
    getters: {
        // getAdds() {
        //     return this.add
        // },
        // getDot(){
        //     return this.dot
        // },
        // getFac(){
        //     return this.fac
        // }
    },
    actions: {
        getAdds() {
            const text = document.getElementById("text")

            const b1 = document.getElementById("btn1")
            const b2 = document.getElementById("btn2")
            const b3 = document.getElementById("btn3")
            const b4 = document.getElementById("btn4")
            const b5 = document.getElementById("btn5")
            const b6 = document.getElementById("btn6")
            const b7 = document.getElementById("btn7")
            const b8 = document.getElementById("btn8")
            const b9 = document.getElementById("btn9")
            const b10 = document.getElementById("btn10")
            const b11 = document.getElementById("btn11")
            const b12 = document.getElementById("btn12")
            const b13 = document.getElementById("btn13")
            const b14 = document.getElementById("btn14")
            const b15 = document.getElementById("btn15")
            const b16 = document.getElementById("btn16")
            const b17 = document.getElementById("btn17")
            const b18 = document.getElementById("btn18")
            const b19 = document.getElementById("btn19")
            const b20 = document.getElementById("btn20")
            const b21 = document.getElementById("btn21")
            const b22 = document.getElementById("btn22")
            const b23 = document.getElementById("btn23")
            const b24 = document.getElementById("btn24")
            const b25 = document.getElementById("btn25")
            const b26 = document.getElementById("btn26")
            const b27 = document.getElementById("btn27")
            const b28 = document.getElementById("btn28")
            const b29 = document.getElementById("btn29")
            const b30 = document.getElementById("btn30")
            const b31 = document.getElementById("btn31")
            const b32 = document.getElementById("btn32")
            const b33 = document.getElementById("btn33")
            const b34 = document.getElementById("btn34")
            const b35 = document.getElementById("btn35")
            const b36 = document.getElementById("btn36")
            const b37 = document.getElementById("btn37")
            const b38 = document.getElementById("btn38")

            b1.addEventListener('click', () => {
                text.innerText = "鳳儀書院,鳳山龍山寺"
            })
            b2.addEventListener('click', () => {
                text.innerText = "機場"
            })
            b3.addEventListener('click', () => {
                text.innerText = "十全腔,糊紙"
            })
            b4.addEventListener('click', () => {
                text.innerText = "東沙考古遺址,旗後燈塔,中海軍艦及相關文物,中海軍艦及相關文物,旗後天后宮,旗後礮臺"
            })
            b5.addEventListener('click', () => {
                text.innerText = "玫瑰聖母堂,陳中和紀念館"
            })
            b6.addEventListener('click', () => {
                text.innerText = "美麗島雜誌社高雄服務處原址,柯旗化故居,逍遙園"
            })
            b7.addEventListener('click', () => {
                text.innerText = "玫瑰聖母堂"
            })
            b8.addEventListener('click', () => {
                text.innerText = "原高雄神社前模型爆彈,高雄市立歷史博物館,駁二藝術特區"
            })
            b9.addEventListener('click', () => {
                text.innerText = "卡那卡那富族Pasika’arai（河祭）,卡那卡那富族Mikongu（米貢祭）"
            })
            b10.addEventListener('click', () => {
                text.innerText = "舊打狗驛,西子灣隧道及其防空設施,田町齋場,打狗英國領事館及官邸"
            })
            b11.addEventListener('click', () => {
                text.innerText = "高雄神社社號碑,原日本海軍高雄警備府,潮軍義勇祠碑"
            })
            b12.addEventListener('click', () => {
                text.innerText = "楠梓天后宮,原日本第六海軍燃料廠,台灣基督長老教會楠梓禮拜堂"
            })
            b13.addEventListener('click', () => {
                text.innerText = "下淡水溪六庄頭義勇公做大小功祭典,大樹三和瓦窯,義大世界"
            })
            b14.addEventListener('click', () => {
                text.innerText = "原六龜里池田屋,新威勸善堂祭河江敬義塚祭典,大武壠頂荖濃太祖祭典"
            })
            b15.addEventListener('click', () => {
                text.innerText = "茂林得樂的卡(瑪雅)部落舊址,萬山岩雕群考古遺址"
            })
            b16.addEventListener('click', () => {
                text.innerText = "拉阿魯哇族Miatungusu（聖貝祭）"
            })
            b17.addEventListener('click', () => {
                text.innerText = "客家傳統民居遺構,客家傳統民居遺構,高雄中學紅樓"
            })
            b18.addEventListener('click', () => {
                text.innerText = "甲仙鎮海軍墓,大武壠阿里關太祖祭典,大武壠小林平埔夜祭"
            })
            b19.addEventListener('click', () => {
                text.innerText = "杉林花海,集來吊橋"
            })
            b20.addEventListener('click', () => {
                text.innerText = "美濃水橋,竹仔門電廠,敬字亭,美濃廣善堂,東門樓,金瓜寮聖蹟亭"
            })
            b21.addEventListener('click', () => {
                text.innerText = "內門紫竹寺,七星塔"
            })
            b22.addEventListener('click', () => {
                text.innerText = "月世界"
            })
            b23.addEventListener('click', () => {
                text.innerText = "傀儡戲謝土及拜天公儀式,阿蓮中路吳厝"
            })
            b24.addEventListener('click', () => {
                text.innerText = "路竹洪宗沛宅"
            })
            b25.addEventListener('click', () => {
                text.innerText = "二層行溪舊鐵路橋,明寧靖王墓"
            })
            b26.addEventListener('click', () => {
                text.innerText = "林園清水巖原日軍戰備坑道,鳳鼻頭（中坑門）考古遺址,林園港埔黃家（江夏派）古厝"
            })
            b27.addEventListener('click', () => {
                text.innerText = "曹公圳舊圳頭,大寮共益磚窯廠,大寮瑞榮紅磚工廠"
            })
            b28.addEventListener('click', () => {
                text.innerText = "澄清湖,中興塔"
            })
            b29.addEventListener('click', () => {
                text.innerText = "觀音湖,古嚴寺"
            })
            b30.addEventListener('click', () => {
                text.innerText = "觀音山登山步道,觀音山風景區"
            })
            b31.addEventListener('click', () => {
                text.innerText = "阿公店水庫,烏山頂泥火山"
            })
            b32.addEventListener('click', () => {
                text.innerText = "橋仔頭糖廠,橋仔頭糖廠文化景觀,原橋仔頭驛站"
            })
            b33.addEventListener('click', () => {
                text.innerText = "蚵仔寮漁港"
            })
            b34.addEventListener('click', () => {
                text.innerText = "彌陀漁港海岸光廊,漯底山自然公園"
            })
            b35.addEventListener('click', () => {
                text.innerText = "永安黃家古厝,原烏樹林製鹽株式會社"
            })
            b36.addEventListener('click', () => {
                text.innerText = "下茄萣金鑾宮王醮大典,白砂崙萬福宮王醮大典,茄萣竹滬鹽灘鹽警槍樓"
            })
            b37.addEventListener('click', () => {
                text.innerText = "原日本海軍航空隊岡山宿舍群,原日本海軍航空隊下士官兵集會所"
            })
            b38.addEventListener('click', () => {
                text.innerText = "舊鼓山國小,原旗山上水道,旗山亭仔腳,旗山天后宮,旗山碾米廠"
            })













            
            // fetch("https://api.kcg.gov.tw/api/service/Get/82c544fa-ec50-4dea-8e8c-d8041abe8dee")
            //     .then(res => res.json())
            //     .then(data => {
            //         this.add = data;
            //         console.log(this.add);
            //         this.add.data.forEach(item=>{
            //             this.name.push(item.古蹟名稱)
            //         }),


            //         btns = document.querySelectorAll("button[type='button']")
            //         btns.forEach(item => {
            //             item.addEventListener('click', () => {
            //                 if (item.位置.includes(btns)) {
            //                     console.log(item.古蹟名稱)

            //                 }
            //             })
            //         })
            //     })
        },
        // getDot() {
        //     fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
        //         .then(res => res.json())
        //         .then(obj => {
        //             this.dot = obj
        //             console.log(this.dot)
        //         })
        // },
        // getFac() {
        //     fetch("https://api.kcg.gov.tw/api/service/Get/051bd077-c051-4321-a88b-e9d513ef3508")
        //         .then(res => res.json())
        //         .then(obj1 => {
        //             this.fac = obj1
        //             console.log(this.fac)
        //         })
        // }
    }
})



