import React from "react";
import { Card } from "../Card/Card";
import { Pages } from "../Pages/Pages"
import styles from "./Grid.module.css";


export const Grid = ({allDogs, pages, setPages}) => {

    const productsPerPage = 8;

    const indexMax = pages * productsPerPage;
    const indexMin = indexMax - productsPerPage;
    const currentDogs = allDogs.slice(indexMin, indexMax)


    return (
        <div className = {styles.grid}>
        <div className = {styles.cards}>
            {allDogs && currentDogs.map((dog) => {
                return (
                <Card 
                key={dog.id} 
                name={dog.name}
                weight={dog.weight.metric}
                image={dog.image.url}
                temperament={dog.temperament}
                id={dog.id}
                />
                )
            })}
        </div>
        <Pages allDogs={allDogs} pages={pages} setPages={setPages} />
        </div>
    )
}