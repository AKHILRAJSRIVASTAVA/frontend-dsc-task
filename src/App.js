import './App.css';
import Search from './Component/Search';
import {GetCity} from "./utils/service"
import { useEffect, useState } from 'react';
import ShowCard from './Component/ShowCard';

function App() {
  const [Cities, setCities] = useState([]);
  const [refresh, setrefresh] = useState(true);
   useEffect(() => {
    const getCitiesArr = async () => {
      try {
         const res = await GetCity();
          setCities(res);
      } catch (err) {
      }
    };
    getCitiesArr(); 
    
   }, [refresh])
    
  const reload =()=>{
    setrefresh(!refresh);
  }
  return (
    <div>
      <div className="Search">
        <h1><b>SEARCH WEATHER</b></h1>
        <h4>*Press Plus Sign For Save A Place </h4>
        <h4>*Press Bin Sign For Save A Place  </h4>
        <h4><b>NOTE: </b>If You Add More Than Three Places , Only Last Three Places Will Be Restored</h4>
      <Search reload={reload}/>
      </div>
       <div id="SavedCity">
        {Cities.map((city)=>{
        return <ShowCard city={city} button={false} reload={reload}/>
      })}</div>
    </div>
  );
}

export default App;
