import axios from "axios";
import { GET_ALL_DOGS, FILTER_DOGS_BY_TEMPER, FILTER_DOGS_BY_ORIGIN, SORT } from "../action-types";
const { REACT_APP_GET_ALL_DOGS } = process.env;

export const getAllDogs = () => {
    return async (dispatch) => {
        const response = await axios.get(REACT_APP_GET_ALL_DOGS);
           
        response.data.map((dog) => dog.tempers ? dog.temperament = (dog.tempers.map((temper) => temper.temper_name).toString()) : null);

        dispatch ({ type: GET_ALL_DOGS, payload: response.data });
    };
};

export const filterDogsByTemper = (payload) => {
    
    return  (
        {type: FILTER_DOGS_BY_TEMPER, payload}
    )
}

export const filterDogsByOrigin = (payload) => {
    
    return  (
        {type: FILTER_DOGS_BY_ORIGIN, payload}
    )
}

export const Sort = (payload) => {
    
    return  (
        {type: SORT, payload}
    )
}