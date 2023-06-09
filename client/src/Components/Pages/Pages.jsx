import React from "react";
import styles from "./Pages.module.css"


export const Pages = ({allDogs, pages, setPages})=>{

const maximunIndex = Math.ceil(allDogs.length/8)


let buttons = [];

for(let i = 1; i <= maximunIndex; i++) {
    buttons.push(i);
}

const handlePage = (e) => {
    setPages(Number(e.target.value));
}

const handleClickNext = (e) => {
if(pages < maximunIndex ) {
    setPages(Number((pages + 1)))
};
};

const handleClickPrev = (e) => {
if(pages > 1) {
    setPages(Number((pages - 1)));
}; 
};
    return(
        <div className= {styles.container}>
            <button className = {styles.arrowButton} onClick={handleClickPrev}>{'<'}</button>
            {buttons.map((b) => <button key= {b}  className = {b === pages ? styles.numberActive : styles.numberButton} value = {b} onClick = {handlePage} >{b}</button>)}
            <button className = {styles.arrowButton} onClick={handleClickNext}>{'>'}</button>
        </div>
    )
}