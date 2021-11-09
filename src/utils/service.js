import axios from "axios";

let cityArr = [];
const key = "d161f626b2889ca35b66462f9868a7b8";
export async function FetchCity(city){
        const res = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
        return res.data;
    
};

export async function AddCity(city){
    if(cityArr.length === 3)
    {
        cityArr.splice(0,1);
    }
    cityArr.push(city);
};

export async function DelCity(city){
    const RemArr = cityArr.filter((x) => {
        return x!==city;
      });
    cityArr = RemArr  
};

export async function GetCity(){
    return cityArr;
}