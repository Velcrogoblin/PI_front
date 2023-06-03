import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const { REACT_APP_GET_ALL_DOGS } = process.env;


export const Details = () => {
    const [dog, setDog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`${REACT_APP_GET_ALL_DOGS}/id/${id}`)
        .then((response) => setDog(response.data));
    }, [id]);
    
    console.log(dog);
    return (
        <div>
            {dog && <h1>NOMBRE: {dog.name}</h1>}
            {dog && <h3>AñOS DE VIDA: {dog.life_span}</h3>}
            {dog && <h3>PESO: {dog.weight?.metric}</h3>}
            {dog && <h3>ALTURA: {dog.height?.metric}</h3>}
            {dog.temperament && <h3>TEMPERAMENT: {dog.temperament}</h3>}
            {dog.tempers && <h3> TEMPERAMENT: {dog.tempers.map((temper) => (
                <span>{temper.temper_name}</span>
            ))}</h3>}
            {dog && <img src= {dog.image?.url} alt={dog.name}/>}
            <Link to = "/home">Volver al Home</Link>
        </div>
    )
}


