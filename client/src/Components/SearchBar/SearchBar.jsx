import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/action-creators";
import styles from "./SearchBar.module.css";

export const SearchBar = ({setPages}) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState();

    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

   const handleSearchByName = (e) => {
        e.preventDefault();
        dispatch(getDogsByName(input));
        setPages(1);
    }



    return (
        <div className = {styles.container}>
            <form onSubmit = {handleSearchByName}>
                    <input placeholder = "search by name" onChange = {handleInputChange}></input>
                    <button type = "submit">Search</button>
            </form>
        </div>
    )
}
