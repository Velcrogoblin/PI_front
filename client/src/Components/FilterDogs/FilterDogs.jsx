import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { filterDogsByOrigin } from "../../redux/action-creators";
import styles from "./FilterDogs.module.css";

const {REACT_APP_GET_ALL_TEMPERS} = process.env;

export const FilterDogs = ({setPages}) => {

    const dispatch = useDispatch();
    const [tempers, setTempers] = useState ();

    useEffect(() => {
        axios.get(REACT_APP_GET_ALL_TEMPERS)
        .then((response) => setTempers(response.data));
    }, [])

    const handleFilter = (e) => {
        // dispatch(filterDogsByTemper(e.target.value));
        dispatch(filterDogsByOrigin(e.target.value));
        setPages(1);
    }

    return (
        <div className = {styles.container}>
            <div>FILTER</div>
            <select onChange = {handleFilter}>
                    <option value = "all">ALL</option>
                    <option disabled>BY ORIGIN:</option>
                    <option value = "api">API</option>
                    <option value = "db">Database</option>
                    <option disabled>BY TEMPERAMENT:</option>
                    {tempers && tempers.map((temper) => (
                        <option value = {temper.temper_name} key = {temper.id}>{temper.temper_name}</option>
                        ))}
            </select>
        </div>
    )
}
