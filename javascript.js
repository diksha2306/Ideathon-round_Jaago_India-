document.addEventListener("DOMContentLoaded",getdata);

const city=["Delhi","Mumbai","Gandhinagar","Faridkot","Bengaluru","Gangtok","Lucknow","Kolkata","Amravati","Itanagar","Dispur","Patna","Raipur","Panaji","Rohtak","Shimla","Ranchi","Thiruvananthapuram","Bhopal","Imphal","Shillong","Aizwal","Kohima","Bhubaneswar","Jaipur","Chennai","Hyderabad","Agartala","Dehradun"]
const state=["Delhi","Maharashtra","Gujarat","Punjab","Karnataka","Sikkim","Uttar Pradesh","West Bengal","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhatisgarh","Goa","Haryana","Himachal pradesh","Jharkhand","Kerala","Madhya Pradesh","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Rajasthan","Tamil Nadu","Telangana","Tripura","Uttarakhand"]
const id=document.getElementsByClassName("aqi");
const state_list=document.getElementsByClassName("state-name");
const boxlist=document.getElementsByClassName("box");
const divlist=document.getElementsByClassName("grid-item");
var elt=document.getElementById('grid-container');

const api={
    key:'ced09e61a305d9b15238812763a41c6f',
    base:"https://api.openweathermap.org/data/2.5/",
    base1: "http://api.openweathermap.org/data/2.5/air_pollution/forecast"
    
} 

async function getdata(){

    for(let i=0;i<29;i++){
    
    var board = document.createElement('div');
    board.className = "grid-item";
    var para1=document.createElement('p');
    para1.className="state-name";
    var para2=document.createElement('p');
    para2.className="aqi";
    var para3=document.createElement('p');
    para3.className="box-outer";
    var box=document.createElement("div");
    box.className="box";
    para3.appendChild(box);
    board.appendChild(para1);
    board.appendChild(para2);
    board.appendChild(para3);

    
    elt.appendChild(board);
    
    }
    for(let i=0;i<29;i++){
        


setQuery(city[i]);

async function setQuery(query)
{
    
        await getResults(query);

}

async function getlatlon(query){
  
    let apifetch=  await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
    console.log(apifetch);
    const jsondata=await apifetch.json();
    console.log("hey");
    console.log(jsondata);
    return jsondata;
         
}
async function getResults(query)
{

    let weather=await getlatlon(query);
    console.log("here");
    console.log(weather);
    const url=`${api.base1}?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}`;
    let aqdata=await fetch(url);
    console.log(url);
    console.log(aqdata);
    const data=await aqdata.json();
     console.log(data);
     let aqi=data.list[0].main.aqi;
     console.log(aqi);
   

    dowork(aqi,query);
}

async function dowork(aqi,query){
    console.log(query);

    if(aqi===1){
        boxlist[i].style.background="green";
    }else if(aqi===2){
        boxlist[i].style.background="yellow";
    }else if(aqi===3){
        boxlist[i].style.background="orange";
    }else if(aqi===4){
        boxlist[i].style.background="red";
    }else {
        boxlist[i].style.background="purple";
    }
    id[i].innerHTML="Air Quality Index (AQI) is: "+aqi;
        state_list[i].innerHTML=state[i];
    }
    

}}