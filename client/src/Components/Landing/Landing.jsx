import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div>
            <h1>ESTE ES EL LANDING</h1>
            <Link to = "/home"><h3>IR AL HOME</h3></Link>
        </div>
    )
}