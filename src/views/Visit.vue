<script>
import { mapState, mapActions } from 'pinia'
import vis from '../stores/count'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(vis, ["add","name"])

    },
    methods: {
        ...mapActions(vis, ["getadds"])
    }
    // mounted:{

    // console.dir( cls1);

    //             cls1.forEach(item=>{
    //                 console.log("123");
    //                 item.addEventListener("click",function(){
    //                     console.log(item.id);
    //                 })
    // })

}






// const map01 =document.getElementById("map01")

// map01.addEventListener('click', function () {
// // // if(){
// console.log("aaaa");
// // }
// })
</script>

<template>

<div class="clock">
    <h2>{{ this.name }}</h2>
</div>
    <button type="button" @click="getadds()" class="btn1" value="鳳山區">鳳山區</button>
    <button type="button" @click="" class="btn2" value="小港區">小港區</button>
    <button type="button" @click="" class="btn3" value="前鎮區">前鎮區</button>
    <button type="button" @click="" class="btn4" value="旗津區">旗津區</button>
    <button type="button" @click="" class="btn5" value="苓雅區">苓雅區</button>
    <button type="button" @click="" class="btn6" value="新興區">新興區</button>
    <button type="button" @click="" class="btn7" value="前金區">前金區</button>
    <button type="button" @click="" class="btn8" value="鹽埕區">鹽埕區</button>
    <button type="button" @click="" class="btn9" value="那瑪夏區">那瑪夏區</button>
    <button type="button" @click="" class="btn10" value="鼓山區">鼓山區</button>
    <button type="button" @click="" class="btn11" value="左營區">左營區</button>
    <button type="button" @click="" class="btn12" value="楠梓區">楠梓區</button>
    <button type="button" @click="" class="btn13" value="大樹區">大樹區</button>
    <button type="button" @click="" class="btn15" value="茂林區">茂林區</button>
    <button type="button" @click="" class="btn16" value="桃源區">桃源區</button>
    <button type="button" @click="" class="btn17" value="三民區">三民區</button>
    <button type="button" @click="" class="btn18" value="甲仙區">甲仙區</button>
    <button type="button" @click="" class="btn19" value="杉林區">杉林區</button>
    <button type="button" @click="" class="btn20" value="美濃區">美濃區</button>
    <button type="button" @click="" class="btn21" value="內門區">內門區</button>
    <button type="button" @click="" class="btn22" value="田寮區">田寮區</button>
    <button type="button" @click="" class="btn23" value="阿蓮區">阿蓮區</button>
    <button type="button" @click="" class="btn24" value="路竹區">路竹區</button>
    <button type="button" @click="" class="btn25" value="湖內區">湖內區</button>
    <button type="button" @click="" class="btn26" value="林園區">林園區</button>
    <button type="button" @click="" class="btn27" value="大寮區">大寮區</button>
    <button type="button" @click="" class="btn28" value="鳥松區">鳥松區</button>
    <button type="button" @click="" class="btn29" value="仁武區">仁武區</button>
    <button type="button" @click="" class="btn30" value="大社區">大社區</button>
    <button type="button" @click="" class="btn31" value="燕巢區">燕巢區</button>
    <button type="button" @click="" class="btn32" value="橋頭區">橋頭區</button>
    <button type="button" @click="" class="btn33" value="梓官區">梓官區</button>
    <button type="button" @click="" class="btn34" value="彌陀區">彌陀區</button>
    <button type="button" @click="" class="btn35" value="永安區">永安區</button>
    <button type="button" @click="" class="btn36" value="茄萣區">茄萣區</button>
    <button type="button" @click="" class="btn37" value="岡山區">岡山區</button>
    <button type="button" @click="" class="btn38" value="旗山區">旗山區</button>


    <img src="src/views/未命名.png" alt="">
</template>

<style scoped lang="scss">

.clock{
    width: 200px;
    height: 500px;
    border: 1px solid black;
    position: absolute;
    border-radius: 30px;
    top: 300px;
    right: 100px;

}
.btn1 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 880px;
    left: 810px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}



.btn2 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1050px;
    left: 850px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn3 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1070px;
    left: 570px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn4 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 970px;
    left: 450px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn5 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 790px;
    left: 760px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn6 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 770px;
    left: 720px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn7 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 930px;
    left: 420px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn8 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 870px;
    left: 420px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn9 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 305px;
    left: 1160px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn10 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 810px;
    left: 370px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn11 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 740px;
    left: 390px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn12 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 710px;
    left: 720px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn13 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 930px;
    left: 1140px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn14 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 805px;
    left: 1300px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn15 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 750px;
    left: 1450px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn16 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 415px;
    left: 1510px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn17 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 750px;
    left: 700px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn18 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 440px;
    left: 1095px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn19 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 530px;
    left: 1070px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn20 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 830px;
    left: 1200px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn21 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 560px;
    left: 1030px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn22 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 570px;
    left: 980px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn23 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 660px;
    left: 940px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn24 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 635px;
    left: 880px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn25 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 555px;
    left: 820px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn26 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1080px;
    left: 1050px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn27 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1065px;
    left: 1090px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn28 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1000px;
    left: 1120px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn29 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 1015px;
    left: 830px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn30 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 950px;
    left: 830px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn31 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 890px;
    left: 1140px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }

}

.btn32 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 510px;
    left: 640px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn33 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 665px;
    left: 350px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn34 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 595px;
    left: 310px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn35 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 510px;
    left: 270px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn36 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 415px;
    left: 250px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn37 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 820px;
    left: 790px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}

.btn38 {
    border: none;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    top: 833px;
    left: 1095px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}</style>
