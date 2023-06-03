import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { filterDogsByTemper } from "../../redux/action-creators";

const {REACT_APP_GET_ALL_TEMPERS} = process.env;

export const FilterByTemper = () => {

    const dispatch = useDispatch();
    const [tempers, setTempers] = useState ();

    useEffect(() => {
        axios.get(REACT_APP_GET_ALL_TEMPERS)
        .then((response) => setTempers(response.data));
    }, [])

    const handleFilterByTempers = (e) => {
        dispatch(filterDogsByTemper(e.target.value));
    }

    return (
        <div>
            <select onChange = {handleFilterByTempers}>
                    <option value = "all">SELECT TEMPER</option>
                    {tempers && tempers.map((temper) => (
                        <option value = {temper.temper_name} key = {temper.id}>{temper.temper_name}</option>
                        ))}
            </select>
        </div>
    )
}
