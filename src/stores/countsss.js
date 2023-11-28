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
                text.innerText = "鳳儀書院 \n 鳳山龍山寺"
            })
            b2.addEventListener('click', () => {
                text.innerText = "機場"
            })
            b3.addEventListener('click', () => {
                text.innerText = "十全腔 \n 糊紙"
            })
            b4.addEventListener('click', () => {
                text.innerText = "東沙考古遺址 \n 旗後燈塔 \n 中海軍艦及相關文物 \n 中海軍艦及相關文物 \n 旗後天后宮 \n 旗後礮臺"
            })
            b5.addEventListener('click', () => {
                text.innerText = "玫瑰聖母堂 \n 陳中和紀念館"
            })
            b6.addEventListener('click', () => {
                text.innerText = "美麗島雜誌社高雄服務處原址 \n 柯旗化故居 \n 逍遙園"
            })
            b7.addEventListener('click', () => {
                text.innerText = "玫瑰聖母堂"
            })
            b8.addEventListener('click', () => {
                text.innerText = "原高雄神社前模型爆彈 \n 高雄市立歷史博物館 \n 駁二藝術特區"
            })
            b9.addEventListener('click', () => {
                text.innerText = "卡那卡那富族Pasika’arai（河祭） \n 卡那卡那富族Mikongu（米貢祭）"
            })
            b10.addEventListener('click', () => {
                text.innerText = "舊打狗驛 \n 西子灣隧道及其防空設施 \n 田町齋場 \n 打狗英國領事館及官邸"
            })
            b11.addEventListener('click', () => {
                text.innerText = "高雄神社社號碑 \n 原日本海軍高雄警備府 \n 潮軍義勇祠碑"
            })
            b12.addEventListener('click', () => {
                text.innerText = "楠梓天后宮 \n 原日本第六海軍燃料廠 \n 台灣基督長老教會楠梓禮拜堂"
            })
            b13.addEventListener('click', () => {
                text.innerText = "下淡水溪六庄頭義勇公做大小功祭典 \n 大樹三和瓦窯 \n 義大世界"
            })
            b14.addEventListener('click', () => {
                text.innerText = "原六龜里池田屋 \n 新威勸善堂祭河江敬義塚祭典 \n 大武壠頂荖濃太祖祭典"
            })
            b15.addEventListener('click', () => {
                text.innerText = "茂林得樂的卡(瑪雅)部落舊址 \n 萬山岩雕群考古遺址"
            })
            b16.addEventListener('click', () => {
                text.innerText = "拉阿魯哇族Miatungusu（聖貝祭）"
            })
            b17.addEventListener('click', () => {
                text.innerText = "客家傳統民居遺構 \n 客家傳統民居遺構 \n 高雄中學紅樓"
            })
            b18.addEventListener('click', () => {
                text.innerText = "甲仙鎮海軍墓 \n 大武壠阿里關太祖祭典 \n 大武壠小林平埔夜祭"
            })
            b19.addEventListener('click', () => {
                text.innerText = "杉林花海 \n 集來吊橋"
            })
            b20.addEventListener('click', () => {
                text.innerText = "美濃水橋 \n 竹仔門電廠 \n 敬字亭 \n 美濃廣善堂 \n 東門樓 \n 金瓜寮聖蹟亭"
            })
            b21.addEventListener('click', () => {
                text.innerText = "內門紫竹寺 \n 七星塔"
            })
            b22.addEventListener('click', () => {
                text.innerText = "月世界"
            })
            b23.addEventListener('click', () => {
                text.innerText = "傀儡戲謝土及拜天公儀式 \n 阿蓮中路吳厝"
            })
            b24.addEventListener('click', () => {
                text.innerText = "路竹洪宗沛宅"
            })
            b25.addEventListener('click', () => {
                text.innerText = "二層行溪舊鐵路橋 \n 明寧靖王墓"
            })
            b26.addEventListener('click', () => {
                text.innerText = "林園清水巖原日軍戰備坑道 \n 鳳鼻頭（中坑門）考古遺址 \n 林園港埔黃家（江夏派）古厝"
            })
            b27.addEventListener('click', () => {
                text.innerText = "曹公圳舊圳頭 \n 大寮共益磚窯廠 \n 大寮瑞榮紅磚工廠"
            })
            b28.addEventListener('click', () => {
                text.innerText = "澄清湖 \n 中興塔"
            })
            b29.addEventListener('click', () => {
                text.innerText = "觀音湖 \n 古嚴寺"
            })
            b30.addEventListener('click', () => {
                text.innerText = "觀音山登山步道 \n 觀音山風景區"
            })
            b31.addEventListener('click', () => {
                text.innerText = "阿公店水庫 \n 烏山頂泥火山"
            })
            b32.addEventListener('click', () => {
                text.innerText = "橋仔頭糖廠 \n 橋仔頭糖廠文化景觀 \n 原橋仔頭驛站"
            })
            b33.addEventListener('click', () => {
                text.innerText = "蚵仔寮漁港"
            })
            b34.addEventListener('click', () => {
                text.innerText = "彌陀漁港海岸光廊 \n 漯底山自然公園"
            })
            b35.addEventListener('click', () => {
                text.innerText = "永安黃家古厝 \n 原烏樹林製鹽株式會社"
            })
            b36.addEventListener('click', () => {
                text.innerText = "下茄萣金鑾宮王醮大典 \n 白砂崙萬福宮王醮大典 \n 茄萣竹滬鹽灘鹽警槍樓"
            })
            b37.addEventListener('click', () => {
                text.innerText = "原日本海軍航空隊岡山宿舍群 \n 原日本海軍航空隊下士官兵集會所"
            })
            b38.addEventListener('click', () => {
                text.innerText = "舊鼓山國小 \n 原旗山上水道 \n 旗山亭仔腳 \n 旗山天后宮 \n 旗山碾米廠"
            })

        },
    }
})



