import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export const Card = ({name, weight, id, image, temperament}) => {
    return (
        <div>
        <div className = {styles.card}>
            <div>
            <img src= {image} alt= {name}/>
            </div>
            <div className = {styles.cardInfo}>
            <h4>{name.toUpperCase()}</h4>
            <h4>WEIGHT: {weight}</h4>
            <h4>{temperament}</h4>
            </div>
        <div className = {styles.lnk}>
            <Link to = {`/details/${id}`}>DETAILS</Link>  
            </div>
        </div>
        </div>
    )
}