import React,{useState} from 'react'
import { AddCity, DelCity ,FetchCity} from '../utils/service'
import "../App.css"
import plus from "../assets/plus.svg";
import del from "../assets/delete.svg";
const ShowCard = ({city , button , reload}) => {
    const [Weather,setWeather]=useState("");
    const execute = async() =>{
        if(button === true){
            try{
                await AddCity(city);
                reload();
            }catch(err){
                console.log(err);
            }
        }
        else{
            try{
                DelCity(city);
                reload();
            }catch(err){
                console.log(err);
            }
        }
    }

    const fetchApi = async (city)=>{
        try{
            const res = await FetchCity(city);
            setWeather(res.main.temp);
        }catch(err){
            console.log(err);
        }
    }
    fetchApi(city);
    return (
        <div className="card">
            <div>{city}</div>
            <div>{Weather} deg</div>
            <div onClick={execute}>
                <img alt="Operation" src={button ? plus : del}/>
            </div>
        </div>
    )
}

export default ShowCard
