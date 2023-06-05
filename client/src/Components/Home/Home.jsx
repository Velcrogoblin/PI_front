import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllDogs } from "../../redux/action-creators";
//import { Link } from "react-router-dom";
import { Grid} from "../Grid/Grid"
import { FilterDogs } from "../FilterDogs/FilterDogs";
//import { FilterByOrigin } from "../FilterByOrigin/FilterByOrigin";
import { Sort } from "../Sort/Sort";
import { NavBar } from "../NavBar/NavBar";
//import { SortByWeight } from "../SortByWeight/SortByWeight" ;
import styles from "./Home.module.css"

export const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const[pages, setPages] = useState(1);

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])


   return (
        <div>
            <NavBar setPages={setPages}/>
            <div className= {styles.filters}>
            <Sort setPages={setPages}/>
            <FilterDogs setPages={setPages}/>
            </div>
            <Grid allDogs= {allDogs} pages={pages} setPages={setPages}/>
            </div>
                
    )
}