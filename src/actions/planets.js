/**
 * Created by deepcoder on 29/09/17.
 */
import axios from 'axios';

export function fetchPlanetData(inputValue){
    return async (dispatch) => {
        dispatch(fetchPlanetDataLoading());
        try {
            const myInit = {
                method: 'GET',
            };
            const response = await fetch(`https://swapi.co/api/planets/?search=${inputValue}`,myInit);
            const data = await response.json();
            if(inputValue.length >0) {
                dispatch(fetchPlanetDataSuccess(data.results));
            }
            else{
                dispatch(fetchPlanetDataSuccess([]));
            }
        }
        catch(error){
            dispatch(fetchPlanetDataFailure(error.message))
        }


    };
}
function fetchPlanetDataLoading() {
   return {
       type:'FETCH_PLANET_LOADING',
       payload:true

   }
}

function fetchPlanetDataSuccess(response) {
    return {
        type: 'FETCH_PLANET_SUCCESS',
        payload: response
    }
}


function fetchPlanetDataFailure(err) {
    return {
        type: 'FETCH_PLANET_FAILURE',
        payload:err
    }
}