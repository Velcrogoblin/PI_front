import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const {REACT_APP_GET_ALL_TEMPERS, REACT_APP_GET_ALL_DOGS} = process.env;


export const Create = () => {

    const [tempers, setTempers] = useState();

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
        console.log(input)
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
        <div>
            <h1>Crear tu perri</h1>

            <form onSubmit = {handleSubmit}>
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
                        <option value = {temper.temper_name} key = {temper.id}>{temper.temper_name}</option>
                    ))}
                </select>
                <label>Life span: </label>
                <input name = "life_span" onChange = {handleChange}></input>
                <label>Image:</label>
                <input name = "imageURL" onChange = {handleChange}></input>
                <button type = "submit">CREALO MAN!</button>   
            </form>
            <Link to = "/home">IR AL HOME</Link>
        </div>

        
    )
}