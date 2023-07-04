document.addEventListener("DOMContentLoaded",getdata);

const city=["Delhi","Mumbai","Ghandinagar","Faridkot","Bengaluru","Gangtok","Noida","Kolkata"]
const state=["Delhi","Maharashtra","Gujarat","Punjab","Karnataka","Sikkim","Uttar Pradesh","West Bengal"]
const id=document.getElementsByClassName("aqi");
const state_list=document.getElementsByClassName("state-name");
const boxlist=document.getElementsByClassName("box");


async function getdata(){
    for(let i=0;i<8;i++){
        const url = await fetch("https://api.airvisual.com/v2/city?city="+city[i]+"&state="+state[i]+"&country=india&key=da06136f-05cc-4c03-8d47-d7fd9d151522");
 
    const jsondata=await url.json();
    const aqi = jsondata.data.current.pollution.aqius;
    console.log(aqi);
    console.log(city[i]);
    // var aqi=200;
    if(aqi>=0 && aqi<=50){
        boxlist[i].style.background="green";
    }else if(aqi>=51 && aqi<=100){
        boxlist[i].style.background="yellow";
    }else if(aqi>=101 && aqi<=150){
        boxlist[i].style.background="orange";
    }else if(aqi>=151 && aqi<=200){
        boxlist[i].style.background="red";
    }else {
        boxlist[i].style.background="purple";
    }
    id[i].innerHTML="Air Quality Index (AQI) is: "+aqi;
        state_list[i].innerHTML=state[i];
    }

    

}