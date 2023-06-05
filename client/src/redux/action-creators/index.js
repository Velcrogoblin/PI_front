import axios from "axios";
import { GET_ALL_DOGS, FILTER_DOGS_BY_TEMPER, FILTER_DOGS_BY_ORIGIN, SORT, SORT_BY_WEIGHT, GET_DOGS_BY_NAME } from "../action-types";
const { REACT_APP_GET_ALL_DOGS } = process.env;

export const getAllDogs = () => {
    return async (dispatch) => {
        const response = await axios.get(REACT_APP_GET_ALL_DOGS);
           
        response.data.map((dog) => dog.tempers ? dog.temperament = (dog.tempers.map((temper) => temper.temper_name).toString()) : null);

        dispatch ({ type: GET_ALL_DOGS, payload: response.data });
    };
};

export const getDogsByName = (payload) => {
    return async (dispatch) => {
        const response = await axios.get(`${REACT_APP_GET_ALL_DOGS}/name/?name=${payload}`);
        dispatch ({type: GET_DOGS_BY_NAME, payload: response.data});
}
}

// export const filterDogsByTemper = (payload) => {
    
//     return  (
//         {type: FILTER_DOGS_BY_TEMPER, payload}
//     )
// }

export const filterDogsByOrigin = (payload) => {
    
    return  (
        {type: FILTER_DOGS_BY_ORIGIN, payload}
    )
}

export const dogsSort = (payload) => {
    
    return  (
        {type: SORT, payload}
    )
}

export const dogsSortByWeight = (payload) => {
    
    return  (
        {type: SORT_BY_WEIGHT, payload}
    )
}