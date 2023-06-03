import React from "react";


export const Pages = ({allDogs, pages, setPages})=>{

const maximunIndex = Math.ceil(allDogs.length/8)


let buttons = [];

for(let i = 1; i <= maximunIndex; i++) {
    buttons.push(i);
}

const handlePage = (e) => {
    setPages(e.target.value);
    console.log(e.target.value)
}

const handleClickNext = (e) => {
if(e && pages < maximunIndex ) {
    setPages(pages + 1)
};
};

const handleClickPrev = (e) => {
if(e && pages > 1) {
    setPages(pages - 1)
}; 
};
    return(
        <div>
            <button onClick={handleClickPrev}>{'<'}</button>
            {buttons.map((b) => <button value = {b} onClick = {handlePage} >{b}</button>)}
            <button onClick={handleClickNext}>{'>'}</button>
        </div>
    )
}