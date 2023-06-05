import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export const NavBar = ({setPages}) => {
    return (
        <div className = {styles.container}>
            <Link to = "/create"><button>CREATE DOG</button></Link>
            <SearchBar setPages = {setPages} />
        </div>
    )
}