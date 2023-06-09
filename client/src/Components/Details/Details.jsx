import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css";
const { REACT_APP_GET_ALL_DOGS } = process.env;


export const Details = () => {
    const [dog, setDog] = useState({});
    const { id } = useParams();
    

    useEffect(() => {
        axios.get(`${REACT_APP_GET_ALL_DOGS}/id/${id}`)
        .then((response) => setDog(response.data))
        .catch((response) => alert(response.message))

}, [id]);
    
    return (
        <div className = {styles.container}>
            <div className = {styles.card}>
                <div>
                    {dog && <img src= {dog.image?.url} alt={dog.name}/>}
                </div>
                <div className = {styles.cardInfo}>
                    {dog && <h1>NAME: {dog.name}</h1>}
                    {dog && <h3>LIFE SPAN: {dog.life_span} years</h3>}
                    {dog && <h3>WEIGHT: {dog.weight?.metric}</h3>}
                    {dog && <h3>HEIGHT: {dog.height?.metric}</h3>}
                    {dog.temperament && <h3>TEMPERAMENT: {dog.temperament}</h3>}
                    {dog.tempers && <h3> TEMPERAMENT: {dog.tempers.map((temper) => (
                        <span key = {temper}>{temper.temper_name} </span>
                    ))}</h3>}
                    {dog && <h4>ID: {dog.id}</h4>}
                </div>
                <div className = {styles.lnk}>
                    <Link to = "/home">BACK TO HOME</Link>
                </div>
            </div>
        </div>
    )
}


