import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export const Card = ({name, weight, id, image, temperament}) => {
    return (
        <div className = {styles.card}>
            <img src= {image} alt= {name}/>
            <h4>{name}</h4>
            <h4>{weight}</h4>
            <h4>{temperament}</h4>
            <Link to = {`/details/${id}`}>Ir al perrito</Link>
        </div>
    )
}