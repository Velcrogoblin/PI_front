import { GET_ALL_DOGS, FILTER_DOGS_BY_TEMPER, FILTER_DOGS_BY_ORIGIN, SORT } from "../action-types";

const initialState = {
    dogs: [],
    allDogs: [],
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS: 

            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
            }
            case FILTER_DOGS_BY_TEMPER:
                let filteredDogsByTemper = [];
                
                if(action.payload === "all") {
                    filteredDogsByTemper = state.dogs;
                } else {
                    filteredDogsByTemper = state.dogs.filter((dog) => (
                        dog.temperament && dog.temperament.includes(action.payload)
                    ))
                }
            return {
                ...state,
                allDogs: filteredDogsByTemper
            }
            
            case FILTER_DOGS_BY_ORIGIN:
                let filteredDogsByOrigin; 
                
                console.log(action.payload);

                action.payload === "db" ? filteredDogsByOrigin = state.dogs.filter((dog) => typeof dog.id === "string")
                : action.payload === "api" ? filteredDogsByOrigin = state.dogs.filter((dog) => typeof dog.id === "number")
                : filteredDogsByOrigin = state.dogs;

            return {
                ...state,
                allDogs: filteredDogsByOrigin
            }

            case SORT:
                let sortedDogs = [];
                
                action.payload === "ascending" ? state.allDogs = state.dogs.sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === "descending" ? state.allDogs = state.dogs.sort((b, a) => a.name.localeCompare(b.name))
                : action.payload === "weight" ?  state.allDogs = state.dogs.sort(function(a, b) {
                    var weightA = a.weight.metric.split(' ')[0];
                    var weightB = b.weight.metric.split(' ')[0]; 
                    return Number(weightA) > Number(weightB) ? 1 : -1;
                }
                )

                : state.allDogs = state.dogs;

                sortedDogs = [...state.allDogs];
        
                return {
                    ...state,
                    allDogs: sortedDogs
                }
        default:
            return state;
    }
}