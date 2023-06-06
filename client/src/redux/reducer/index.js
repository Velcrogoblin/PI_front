import { GET_ALL_DOGS, FILTER_DOGS_BY_ORIGIN, SORT, SORT_BY_WEIGHT, GET_DOGS_BY_NAME } from "../action-types";

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

            case GET_DOGS_BY_NAME: 

            let dogsByName;

            action.payload.length >= 1 ? dogsByName = action.payload
            : dogsByName = state.dogs;

            

            return {
                ...state,
                allDogs: dogsByName,
            }

                  
            case FILTER_DOGS_BY_ORIGIN:
                let filteredDogs = []; 
                
                action.payload === "db" ? filteredDogs = state.dogs.filter((dog) => typeof dog.id === "string")
                : action.payload === "api" ? filteredDogs = state.dogs.filter((dog) => typeof dog.id === "number")
                : action.payload === "all" ? filteredDogs = state.dogs
                : filteredDogs = state.dogs.filter((dog) => (
                    dog.temperament && dog.temperament.includes(action.payload)
                ))

            return {
                ...state,
                allDogs: filteredDogs
            }

            case SORT:
                let sortedDogs = [];
                
                action.payload === "ascending" ? sortedDogs = state.allDogs.sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === "descending" ? sortedDogs = state.allDogs.sort((b, a) => a.name.localeCompare(b.name))
                

                : sortedDogs = state.allDogs;

                sortedDogs = [...state.allDogs];
        
                return {
                    ...state,
                    allDogs: sortedDogs
                }

                case SORT_BY_WEIGHT:
                let sortedDogsByWeight = [];
                
                action.payload === "ascendingWeight" ? state.allDogs.sort((a, b) => {
                    let weightA = a.weight.metric.split(' ')[0];
                    let weightB = b.weight.metric.split(' ')[0]; 
                    return Number(weightA) > Number(weightB) ? 1 : -1;
                }
                )
                : action.payload === "descendingWeight" ? state.allDogs.sort((a, b) => {
                    let weightA = a.weight.metric.split(' ')[0];
                    let weightB = b.weight.metric.split(' ')[0]; 
                    return Number(weightA) < Number(weightB) ? 1 : -1;
                }
                )
                : state.allDogs = state.allDogs;
                
                sortedDogsByWeight = state.allDogs.filter((dog) => !isNaN(Number(dog.weight.metric.split(' ')[0])));
                let aux = state.allDogs.filter((dog) => isNaN(Number(dog.weight.metric.split(' ')[0])));

                sortedDogsByWeight = [...sortedDogsByWeight, ...aux];

        
                return {
                    ...state,
                    allDogs: sortedDogsByWeight
                }
        default:
            return state;
    }
}