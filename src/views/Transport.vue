<script>
export default {
    data() {
        return {
            map: null,
            from: "",
            to: "",
            traffic: "",
            autocomplete: null,  //自動完成地址
            place: null,
            markers: [],
            infowindows: [],
            route: {},
        };
    },
    methods: {
        // 建立地圖
        initMap() {
            let directionsDisplay = new google.maps.DirectionsRenderer();
            // 初始化地圖
            this.map = new google.maps.Map(document.getElementById("map"), {
                // 經緯度
                center: { lat: 22.620484453547732, lng: 120.31206705005728 },
                //縮放比例
                zoom: 18,
            });
            // 放置路線圖層
            directionsDisplay.setMap(this.map);
        },
        routesMap() {
            // 路線相關設定
            let request = {
                origin: this.from,      // 起點
                destination: this.to,   // 終點
                travelMode: this.traffic,    // 方式
            };

            // 繪製路線
            let directionsService = new google.maps.DirectionsService();
            directionsService.route(request, (result, status) => {
                if (status == 'OK') {
                    // 回傳路線上每個步驟的細節
                    console.log(result.routes[0].legs[0].steps);
                    let directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(this.map);
                    directionsDisplay.setDirections(result);
                } else {
                    console.log(status);
                //     let steps = result.routes[0].legs[0].steps;
                //     steps.forEach((e, i) => {
                //         console.log(steps);
                //         // 加入地圖標記
                //         markers[i] = new google.maps.Marker({
                //             position: { lat: e.start_location.lat(), lng: e.start_location.lng() },  //start_location 包含目前步驟中經過地理編碼的起點 
                //             map: map,
                //             label: { text: i + '', color: "#fff" }
                //         });
                //         // 加入資訊視窗
                //         infowindows[i] = new google.maps.InfoWindow({
                //             content: e.instructions
                //         });
                //         // 加入地圖標記點擊事件
                //         markers[i].addListener('click', function () {
                //             if(infowindows[i].anchor){
                //                 infowindows[i].close();
                //             }else{
                //                 infowindows[i].open(map, markers[i]);
                //             }
                //         });
                //     });
                //     directionsDisplay.setDirections(result);
                // } else {
                //     console.log(status);
                }
            });
        },
    },
    created(){

    },
    mounted() {
        this.initMap()
    },
};
</script>

<template>
    <div class="all">
        <div class="search">
            <span>起點：</span>
            <input type="text" name="" id="" v-model="from">
            <span>　終點：</span>
            <input type="text" name="" id="" v-model="to">
            <span>　交通方式：</span>
            <select name="" id="traffic" v-model="traffic">
                <option value="">請選擇</option>
                <option value="DRIVING">汽車</option>
                <option value="BICYCLING">腳踏車</option>
                <option value="TRANSIT">大眾運輸</option>
                <option value="WALKING">走路</option>
            </select>
            <span>　</span>
            <button type="button" @click="this.routesMap()">顯示</button>
        </div>
        <div class="map" id="map"></div>
    </div>
</template>

<style scoped lang="scss">
.all {
    position: relative;
}

.search {
    position: absolute;
    top: 10px;
    left: 400px;
}

.map {
    width: 1000px;
    height: 500px;
    position: absolute;
    left: 300px;
    top: 50px;
}

span {
    font-size: 20px;
}
</style>