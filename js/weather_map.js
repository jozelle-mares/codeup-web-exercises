function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML="--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=8f2bc8f14763e7b459cd8159c69ee941")
.then(response=> response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" + Number(data.list[i].main.temp_min -262.64).toFixed(1)+"°";
    }
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max -262.64).toFixed(1)+"°";

})