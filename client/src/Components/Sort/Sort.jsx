import React from "react";
import { useDispatch } from "react-redux";
import { Sort } from "../../redux/action-creators";

export const Sortt = () => {

    const dispatch = useDispatch();

   const handleSort = (e) => {
        dispatch(Sort(e.target.value));
    }

    return (
        <div>
            <select onChange = {handleSort}>
                    <option value = "all">SELECT ORDER</option>
                    <option value = "ascending">A - Z</option>
                    <option value = "descending">Z - A</option>
                    <option value = "weight">BY WEIGHT</option>
            </select>
        </div>
    )
}
