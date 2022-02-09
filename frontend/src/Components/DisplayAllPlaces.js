import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const DisplayAllPlaces=()=>{
    const [ places, setPlaces ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(API + "/places")
            .then((res)=>{
                setPlaces(res.data);
            })
    }, [])

    let placesToDisplay = places.map((place, index)=>{
        return <li key={index}>
                    {place.name},&nbsp; 
                    {place.city}&nbsp;
                    <Link to={`/places/${place.id}`}>Details</Link>
                </li>
    })

    return (
        <div>
            <div>Displaying all places</div>
            <ul>
                { placesToDisplay }
            </ul>
        </div>
    )
}

export default DisplayAllPlaces;