import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "./validate";
import styles from "./Create.module.css";

const {REACT_APP_GET_ALL_TEMPERS, REACT_APP_GET_ALL_DOGS} = process.env;


export const Create = () => {

    const navigate = useNavigate();
    const [tempers, setTempers] = useState();
    const [temperList, setTemperList] = useState([]);
    
    const handleTemperList = (e) => {
        if(!temperList.includes(e.target.value) && temperList.length < 6) {
        setTemperList([...temperList, e.target.value]);
    }
    }

    const handleDelete = (e) => {
       let temperAux = temperList.filter((t) => t !== e.target.value);
       setTemperList(temperAux);
    }

    const [input, setInput] = useState({
        name: "",
        minWeight: "",
        maxWeight: "",
        weight: {
            metric: ""
        },
        minHeight: "",
        maxHeight: "",
        height: {
            metric: ""
        },
        temper: [],
        life_span: "",
        image: {
            url: "",
        }
    })

    const [error, setError] = useState({
        name: "",
        minWeight: "",
        maxWeight: "",
        weight: {
            metric: ""
        },
        minHeight: "",
        maxHeight: "",
        height: {
            metric: ""
        },
        temper: [],
        life_span: "",
        image: {
            url: "",
        }
    });

    const handleChange =  (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        
        setError(
        validate({
            ...input,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(error.name === null && error.minWeight === null && error.maxWeight === null && error.minHeight === null && error.maxHeight === null && error.life_span === null) {
        input.weight.metric = `${input.minWeight} - ${input.maxWeight}`;
        input.height.metric = `${input.minHeight} - ${input.maxHeight}`;
        input.image.url = input.imageURL;
        input.temper_name = temperList;
        axios.post(REACT_APP_GET_ALL_DOGS, input)
        .then((res) => alert(res.data.message))
        .catch((res) => alert(res.response.data.message));
        navigate("/home");
    }
}


    useEffect(() => {
        axios.get(REACT_APP_GET_ALL_TEMPERS)
        .then((response) => setTempers(response.data));
    }, [])


    return (
        <div className= {styles.container}>
            <form onSubmit = {handleSubmit}>
            <h2>CREATE YOUR DOG</h2>
                <label>Name: </label>
                <input name = "name" onChange = {(e) => {handleChange(e)}}></input>
                {error.name && <span>{error.name}</span>}
                <label>Min weight: </label>
                <input name = "minWeight" type = "number" onChange = {(e) => {handleChange(e)}}></input>
                {error.minWeight && <span>{error.minWeight}</span>}
                <label>Max weight: </label>
                <input name = "maxWeight" type = "number" onChange = {(e) => {handleChange(e)}}></input>
                {error.maxWeight && <span>{error.maxWeight}</span>}
                <label>Min height: </label>
                <input name = "minHeight" type = "number" onChange = {(e) => {handleChange(e)}}></input>
                {error.minHeight && <span>{error.minHeight}</span>}
                <label>Max height: </label>
                <input name = "maxHeight" type = "number" onChange = {(e) => {handleChange(e)}}></input>
                {error.maxHeight && <span>{error.maxHeight}</span>}
                <label>Temperament: </label>
                <select name = "temper_name" onChange = {(e) => {handleChange(e)}} multiple>
                    {tempers && tempers.map((temper) => (
                        <option value = {temper.temper_name} key = {temper.id} onClick = {handleTemperList}>{temper.temper_name}</option>
                    ))}
                </select>
                <div className = {styles.tempers}>
                {temperList && temperList.map((t) => <button key= {t} type= "button" value= {t} className = {styles.tempersButton} onClick = {(e) => handleDelete(e)}>{t}</button>)}
                </div>
                <label>Life span: </label>
                <input name = "life_span" type = "number" onChange = {(e) => {handleChange(e)}}></input>
                {error.life_span && <span>{error.life_span}</span>}
                <label>Image:</label>
                <input type = "url" placeholder = "https://example.jpg"name = "imageURL" onChange = {(e) => {handleChange(e)}}></input>
                <div>
                    <button disabled = {!input.name || !input.minWeight || !input.maxWeight || !input.minHeight || !input.maxHeight ||  !input.life_span || !input.imageURL || temperList.length === 0 ? true : false} type = "submit" className = {styles.createButton}>CREATE!</button>
                </div>   
            </form>
            <div className = {styles.lnk}>
            <Link to = "/home">BACK TO HOME</Link>
            </div>
        </div>

        
    )
}