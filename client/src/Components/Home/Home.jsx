import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllDogs } from "../../redux/action-creators";
import { Link } from "react-router-dom";
import { Grid} from "../Grid/Grid"
import { FilterByTemper } from "../FilterByTemper/FilterByTemper";
import { FilterByOrigin } from "../FilterByOrigin/FilterByOrigin";
import { Sortt } from "../Sort/Sort";

export const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const[pages, setPages] = useState(1);

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])


   return (
        <div>
            Home
            <Sortt />
            <FilterByOrigin />
            <FilterByTemper />
            <Link to = "/create">CREAR PERRITO</Link>
            <Grid allDogs= {allDogs} pages={pages} setPages={setPages}/>
        </div>
    )
}