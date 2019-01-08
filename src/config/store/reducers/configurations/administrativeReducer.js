import {
    ADMINISTRATIVE_COST,
    INTERNET_COST,
    MODELING_COST,
    OTHERS_COST,
    PHONE_COST,
    TAXES_COST
} from '../../types/configurations/administrativeTypes';

const INITIAL_STATE = {
    administrativeCost: '',
    internetCost: '',
    modelingCost: '',
    phoneCost: '',
    taxesCost: '',
    othersCost: ''

}

export default administrativeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMINISTRATIVE_COST: return { ...state, administrativeCost: action.payload };
        case INTERNET_COST: return { ...state, internetCost: action.payload };
        case MODELING_COST: return { ...state, modelingCost: action.payload };
        case PHONE_COST: return { ...state, phoneCost: action.payload };
        case TAXES_COST: return { ...state, taxesCost: action.payload };
        case OTHERS_COST: return { ...state, othersCost: action.payload };
        default: return state;
    }
}