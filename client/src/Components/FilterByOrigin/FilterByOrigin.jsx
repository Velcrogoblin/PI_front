import React from "react";
import { useDispatch } from "react-redux";
import { filterDogsByOrigin } from "../../redux/action-creators";

export const FilterByOrigin = ({setPages}) => {

    const dispatch = useDispatch();

   const handleFilterByOrigin = (e) => {
        dispatch(filterDogsByOrigin(e.target.value));
        setPages(1);
    }

    return (
        <div>
            <select onChange = {handleFilterByOrigin}>
                    <option value = "all">SELECT ORIGIN</option>
                    <option value = "api">API</option>
                    <option value = "db">DATABASE</option>
            </select>
        </div>
    )
}
