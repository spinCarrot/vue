<script>
export default {
    data() {
    return {
        selectedCity: "",
        selectedTime: "",
        cityOptions: [],
        timeOptions: [],
        weatherInfo: [],
        condition: "",
        minT: "",
        maxT: "",
        rain: '',
        selectedCityInfo:"",
        selectedTimeInfoPop:"",
        selectedTimeInfoWx:"",
        selectedTimeInfoMinT:"",
        selectedTimeInfoMaxT:"",
    };
    },
    mounted() {
    this.loadData();
    },
    methods: {
    loadData() {
        fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-1E0D70CF-80A0-47CB-B7CF-C76D0EDCF4A9&elementName=MinT,MaxT,PoP12h,Wx")
        .then(res => res.json())
        .then(data => {
            this.cityOptions = data.records.locations[0].location;
            this.selectedCity = this.cityOptions[0].locationName;
            this.timeOptions = data.records.locations[0].location[0].weatherElement[0].time;
            this.selectedTime = this.timeOptions[0].startTime;
            this.weatherInfo = data.records.locations[0].location[0].weatherElement;
        });
    },
    handleCityChange() {
        this.updateWeatherData();
    },
    handleTimeChange() {
        this.updateWeatherData();
    },
    updateWeatherData() {
        this.selectedCityInfo = this.cityOptions.find(city => city.locationName === this.selectedCity);
        this.selectedTimeInfoPop = this.weatherInfo[0].time[this.selectedTime];
        this.selectedTimeInfoWx = this.weatherInfo[1].time[this.selectedTime];
        this.selectedTimeInfoMinT = this.weatherInfo[2].time[this.selectedTime];
        this.selectedTimeInfoMaxT = this.weatherInfo[3].time[this.selectedTime];

        if (this.selectedCityInfo && this.selectedTimeInfoWx) {
        this.condition = this.selectedTimeInfoWx.elementValue[0].value;
        this.minT = this.selectedTimeInfoMinT.elementValue[0].value;
        this.maxT = this.selectedTimeInfoMaxT.elementValue[0].value;
        this.rain = this.selectedTimeInfoPop.elementValue[0].value;
        }
    },
    },
};
</script>

<template>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./圖片/01.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./圖片/02.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>輕軌＆85大樓</h3>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/03.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>瑞豐夜市</h3>
                        <p>擁有20年的歷史，高雄規模最大且管理最優的夜市</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/04.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>美濃紙傘</h3>
                        <p>高雄市特有的客家文化象徵之一</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/05.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>旗津海灘</h3>
                        <p>來旗津必訪之處，綿延數公里的弧形海岸線，細軟沙質、海水清澈</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/06.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>壽山動物園</h3>
                        <p>台灣三大市立動物園之一，規模僅次於台北木柵動物園</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/07.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>義大世界</h3>
                        <p>台灣首創古希臘情境主題遊樂園</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/08.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>佛光山</h3>
                        <p>釋星雲法師創辦，台灣佛教四大名山之一</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./圖片/09.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>鴨肉飯</h3>
                        <p>網友推薦高雄代表小吃</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
<div class="bot">
    <img src="./圖片/安琪.png" alt="" class="img1">
    <img src="./圖片/小祈.png" alt="" class="img2">
    <div class="top">
        <h3>天氣預報</h3>
        <select v-model="selectedCity" @change="handleCityChange">
            <option value="">請選擇</option>
            <option v-for="city in cityOptions" :value="city.locationName" :key="city.locationName">{{ city.locationName }}</option>
        </select>
        <select v-model="selectedTime" @change="handleTimeChange">
            <option value="">請選擇</option>
            <option v-for="(item, index) in timeOptions" :value="index" :key="index">{{ item.startTime }}</option>
        </select>
        <div class="contentArea">
            <div class="contentText contentItem">
                <span id="cityName">{{ selectedCity }}</span>
                <span id="condition">：{{ condition }}</span>
            <div class="temp">
                <span id="minT">{{ minT }}</span>
                <span>-</span>
                <span id="maxT">{{ maxT }}</span>
            </div>
            <div class="rain">
                <span>降雨機率：</span>
                <span id="rain">{{ rain }}</span>
                <span>%</span>
            </div>
        </div>
    </div>
    </div>
    <img src="./圖片/飛兒.png" alt="" class="img3">
    <img src="./圖片/小夕.png" alt="" class="img4">
</div>
<div class="bottom">
    <p><a href="https://admin.khh.travel/">高雄市觀光局</a>、<a href="https://khh.travel/">高雄旅遊網</a>、<a href="https://www.krtc.com.tw/">高雄捷運全球資訊網</a>、<a href="https://www.welcometw.com/%E9%AB%98%E9%9B%84%E6%99%AF%E9%BB%9E%E6%8E%A8%E8%96%A6-%EF%BD%9C%E9%AB%98%E9%9B%84%E6%9C%80%E7%BE%8E%E6%9C%80%E5%A4%AFig%E6%89%93%E5%8D%A1%E6%99%AF%E9%BB%9E%EF%BC%8C%E5%B8%82%E5%8D%80%E3%80%81/">高雄必去景點推薦</a>、<a href="https://alerts.ncdr.nat.gov.tw/index.aspx?Mes=459169" >疫情示警</a></p>
</div>
</template>

<style scoped lang="scss">
.bot{
    width: 100vw;
    height: 140px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

.top {
    width: 550px;
    height: 100px;
    background-color:lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}

.img1{
    width: 84px;
    height: 140px;
}
.img2{
    width: 94px;
    height: 140px;
}
.img3{
    width: 118px;
    height: 140px;
}
.img4{
    width: 92px;
    height: 140px;
}
}

.carousel {
    width: 1550px;
    height: 679px;
    border-top: 10px solid purple;
}

.bottom{
    width: 100vw;
    height: 5vh;
    background-color: darkgray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>