<script>
import { mapState, mapActions } from 'pinia'
import vis from '../stores/countsss'
export default {
    data() {
        return {
            btns:"",
        }
    },
    computed: {
        ...mapState(vis, ["add","name","dot","fac"])

    },
    methods: {
        ...mapActions(vis, ["getAdds","getDot","getFac"]),
        // test(){
        //     // const cc = document.getElementById("ccc")
        //     // console.dir(cc)
        //     // console.log(cc.value)
        //     const btns = document.querySelectorAll("button[type='button']")
        //     btns.forEach(item =>{
        //         item.addEventListener('click', ()=>{
        //             this.getadds(item.位置)
        //         })
        //     })
        // }
    },
    mounted(){
        // this.test()
    // console.dir( cls1);

    //             cls1.forEach(item=>{
    //                 console.log("123");
    //                 item.addEventListener("click",function(){
    //                     console.log(item.id);
    //                 })
    // })

}
}







</script>

<template>

<div class="clock">
    <!-- <h2>{{ this.name }}</h2> -->
</div>
    <button type="button"  class="btn1" value="鳳山區">鳳山區</button>
    <button type="button" @click="" class="btn2" value="小港區" id="ccc" >小港區</button>
    <button type="button" @click="getAdds() " id="ccc" class="btn3" value="前鎮區">前鎮區</button>
    <button type="button" @click="" id="ccc" class="btn4" value="旗津區">旗津區</button>
    <button type="button" @click="getDot()"  id="ccc" class="btn5" value="苓雅區">苓雅區</button>
    <button type="button" @click="getFac()" id="ccc" class="btn6" value="新興區">新興區</button>
    <button type="button" @click="" id="ccc" class="btn7" value="前金區">前金區</button>
    <button type="button" @click="" id="ccc" class="btn8" value="鹽埕區">鹽埕區</button>
    <button type="button" @click="" id="ccc" class="btn9" value="那瑪夏區">那瑪夏區</button>
    <button type="button" @click="" id="ccc" class="btn10" value="鼓山區">鼓山區</button>
    <button type="button" @click="" id="ccc" class="btn11" value="左營區">左營區</button>
    <button type="button" @click="" id="ccc" class="btn12" value="楠梓區">楠梓區</button>
    <button type="button" @click="" id="ccc" class="btn13" value="大樹區">大樹區</button>
    <button type="button" @click="" id="ccc" class="btn15" value="茂林區">茂林區</button>
    <button type="button" @click="" id="ccc" class="btn16" value="桃源區">桃源區</button>
    <button type="button" @click="" id="ccc" class="btn17" value="三民區">三民區</button>
    <button type="button" @click="" id="ccc" class="btn18" value="甲仙區">甲仙區</button>
    <button type="button" @click="" id="ccc" class="btn19" value="杉林區">杉林區</button>
    <button type="button" @click="" id="ccc" class="btn20" value="美濃區">美濃區</button>
    <button type="button" @click="" id="ccc" class="btn21" value="內門區">內門區</button>
    <button type="button" @click=""  class="btn22" value="田寮區">田寮區</button>
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
    top: 870px;
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
    top: 1040px;
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
    top: 1060px;
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
    top: 960px;
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
    top: 780px;
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
    top: 760px;
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
    top: 920px;
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
    top: 860px;
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
    top: 295px;
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
    top: 800px;
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
    top: 730px;
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
    top: 700px;
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
    top: 920px;
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
    top: 795px;
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
    top: 740px;
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
    top: 405px;
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
    top: 740px;
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
    top: 430px;
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
    top: 520px;
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
    top: 820px;
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
    top: 550px;
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
    top: 560px;
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
    top: 650px;
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
    top: 625px;
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
    top: 545px;
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
    top: 1070px;
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
    top: 1055px;
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
    top: 990px;
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
    top: 1005px;
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
    top: 940px;
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
    top: 880px;
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
    top: 500px;
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
    top: 655px;
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
    top: 585px;
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
    top: 500px;
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
    top: 405px;
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
    top: 810px;
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
    top: 823px;
    left: 1095px;

    &:hover {
        background-color: rgb(232, 153, 49);
        transition: 1s;

    }
}</style>
