import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Create.module.css";

const {REACT_APP_GET_ALL_TEMPERS, REACT_APP_GET_ALL_DOGS} = process.env;


export const Create = () => {

    const [tempers, setTempers] = useState();

    const [temperList, setTemperList] = useState([]);
    
    const handleTemperList = (e) => {
        if(!temperList.includes(e.target.value) && temperList.length < 6) {
        setTemperList([...temperList, e.target.value]);
        console.log(temperList);
    }
    }

    // const handleDelete = (e) => {
    //    let aux = temperList.map((temper) => temper !== e.target.value);
    //    setTemperList(aux);
    // }

    const [input, setInput] = useState({
        name: "",
        weight: {
            metric: ""
        },
        height: {
            metric: ""
        },
        temper_name: "",
        life_span: "",
        image: {
            url: "",
        }
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input.weight.metric = `${input.minWeight} - ${input.maxWeight}`;
        input.height.metric = `${input.minHeight} - ${input.maxHeight}`;
        input.image.url = input.imageURL;
        axios.post(REACT_APP_GET_ALL_DOGS, input)
        .then(() => alert("Dog was created successfuly"))
        .catch(() => alert("Something went wrong"));
    }

    useEffect(() => {
        axios.get(REACT_APP_GET_ALL_TEMPERS)
        .then((response) => setTempers(response.data));
    }, [])


    return (
        <div className= {styles.container}>
            <form onSubmit = {handleSubmit}>
            <h1>CREATE YOUR DOG</h1>
                <label>Name: </label>
                <input name = "name" onChange = {handleChange}></input>
                <label>Min weight: </label>
                <input name = "minWeight" onChange = {handleChange}></input>
                <label>Max weight: </label>
                <input name = "maxWeight" onChange = {handleChange}></input>
                <label>Min height: </label>
                <input name = "minHeight" onChange = {handleChange}></input>
                <label>Max height: </label>
                <input name = "maxHeight" onChange = {handleChange}></input>
                <label>Temperament: </label>
                <select name = "temper_name" onChange = {handleChange} multiple>
                    {tempers && tempers.map((temper) => (
                        <option value = {temper.temper_name} key = {temper.id} onClick = {handleTemperList}>{temper.temper_name}</option>
                    ))}
                </select>
                <label>Life span: </label>
                <input name = "life_span" onChange = {handleChange}></input>
                <label>Image:</label>
                <input name = "imageURL" onChange = {handleChange}></input>
                <button type = "submit">CREATE!</button>   
            </form>
            {temperList && temperList.map((t) => <button value= {t}>{t}</button>)}
            <div className = {styles.lnk}>
            <Link to = "/home">BACK TO HOME</Link>
            </div>
        </div>

        
    )
}