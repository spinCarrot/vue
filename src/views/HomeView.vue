<script>
// import{ mapState, mapAction, defineStore} from 'pinia'
// import counter from '../stores/counter'
</script>

<template>
    <div class="top">
        <h3>天氣預報</h3>
        <select name="" id="city" v-model="cityText">
            <option value="">請選擇</option>
        </select>
        <select name="" id="time">
            <option value="">請選擇</option>
        </select>
        <div class="contentArea">
            <div class="contentText contentItem">
            <span id="cityName">{{ cityText }}</span>
                <span id="condition"></span>
                <div class="temp">
                    <span id="minT"></span>
                    <span>-</span>
                    <span id="maxT"></span>
                </div>
                <div class="rain">
                    <span>降雨機率：</span>
                    <span id="rain"></span>
                    <span>%</span>
                </div>
            </div>
            <div class="contentImg contentItem">
                <i class="fa-solid fa-rainbow"></i>
            </div>
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