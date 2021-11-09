import React,{useState} from 'react'
import ShowCard from './ShowCard';

const Search = ({reload}) => {
    const [City, setCity] = useState("");
    const [Text, setText] = useState(City);
    const isSearch = () =>{
        console.log(Text);
        setCity(Text);
    }
    return (
        <div id="SearchBox">
            <input
            type="text"
            placeholder="Search City By Name"
            value={Text}
            onChange={(e) => setText(e.target.value)}
          />
            <button onClick={()=> isSearch()}>Search</button>
              {City.length !== 0 ?<ShowCard city={City} button={true} reload={reload}/>:null}
        </div>
    )
}

export default Search
