import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

export const Landing = () => {
    return (
        <div className = {styles.container}>
            <Link to = "/home"><button>ENTER</button></Link>
        </div>
    )
}