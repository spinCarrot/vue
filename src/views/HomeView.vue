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
        // this.condition = this.selectedTimeInfo.weatherElementelementValue[0].value;
        this.condition = this.selectedTimeInfoWx.elementValue[0].value;
        this.minT = this.selectedTimeInfoMinT.elementValue[0].value;
        this.maxT = this.selectedTimeInfoMaxT.elementValue[0].value;
        this.rain = this.selectedTimeInfoPop.elementValue[0].value;
        
        // console.log(this.weatherInfo[0].time.find(time => time.startTime === this.selectedTime))
        // console.log(this.selectedTimeInfo)
        // console.log(this.selectedCityInfo)
        }
    },
    },
};
</script>

<template>
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
        <!-- <div class="contentImg contentItem">
            <i class="fa-solid fa-rainbow"></i>
        </div> -->
    </div>
    </div>
</template>

<style scoped lang="scss">
.top {
    width: 550px;
    height: 10vh;
    background-color:lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}

.carousel {
    width: 1550px;
    height: 678px;
    border-top: 10px solid purple;
}
</style>