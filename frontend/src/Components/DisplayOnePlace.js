import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const DisplayOnePlace=()=>{
    const [ place, setPlace ] = useState({});
    const { id } = useParams();

    let API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(API + "/places/" + id)
            .then((res)=>{
                setPlace(res.data);
            });
    }, [])

    return (
        <ul>
            <li>{place.name}</li>
            <li>{place.city}</li>
            <li>{place.state}</li>
            <li>{place.country}</li>
            <li>Average Temp: {place.average_temp}</li>
            <li>Beaches nearby? {place.has_nearby_beaches ? "True" : "False"}</li>
        </ul>

    )
}

export default DisplayOnePlace;