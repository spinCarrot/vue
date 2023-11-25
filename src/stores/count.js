import { defineStore } from 'pinia';
export default defineStore("counter", {
    state() {
        return {
            location: 1,
            weatherInfo:{},
        }
    },
    getters: {
        locationInfo() {
            return `現在位置： ${this.location}`
        }
    },
    actions: {
        getLocation() {
            console.log(this.location)
        },
        setLocation(num) {
            this.location = num;
        },
        getWeather() {
            fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-1E0D70CF-80A0-47CB-B7CF-C76D0EDCF4A9&elementName=MinT,MaxT,PoP12h,Wx")
            .then(res => res.json())
            .then(data => {
                cityarr = data.records.locations[0].location;
                console.log(cityarr)
                cityarr.forEach(item => {
                    city.innerHTML += `<option value=${item.locationName}>${item.locationName}<option>\n`
                });
                timearr=data.records.locations[0].location[0].weatherElement[0].time;
                timearr.forEach((item,index) =>{
                    time.innerHTML +=`<option value=${index}>${item.startTime}<option>\n`
                })
            })
        }
    }
})