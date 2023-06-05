import React from "react";
import { useDispatch } from "react-redux";
import { dogsSort, dogsSortByWeight } from "../../redux/action-creators";
import styles from "./Sort.module.css";

export const Sort = ({setPages}) => {

    const dispatch = useDispatch();

   const handleSort = (e) => {
        dispatch(dogsSort(e.target.value));
        dispatch(dogsSortByWeight(e.target.value));
        setPages(1);
    }


    return (
        <div className = {styles.container}>
            <div>SORT</div>
            <select onChange = {handleSort}>
                    <option value = "ascending">A to Z</option>
                    <option value = "descending">Z to A</option>
                    <option value = "ascendingWeight">ascending weight</option>
                    <option value = "descendingWeight">descending weight</option>
            </select>
        </div>
    )
}
