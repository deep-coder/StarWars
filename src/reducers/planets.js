const initialState = {
    planets: [],
    error: null,
    isLoading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PLANET_SUCCESS':
        {
            return {...state, planets: action.payload, isLoading: false,error: null}
        }
        case 'FETCH_PLANET_LOADING':
        {
            return {...state, isLoading: true,error: null}
        }
        case 'FETCH_PLANET_FAILURE':
        {
            return {...state, error: action.payload, isLoading: false}
        }
        default:
            return state;
    }
}