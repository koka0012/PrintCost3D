import {
    TYPE_FILAMENT,
    DIAMETER_FILAMENT,
    FAILURE_RATE,
    PRICE_POUND
} from '../../types/configurations/filamentTypes'

const INITIAL_STATE = {
    pricePound: '',
    diameterFilament: 1.75,
    failureRate: 0.1,
    typeFilament: 'abs',
};

export default filamentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRICE_POUND: return { ...state, pricePound: action.payload };
        case DIAMETER_FILAMENT: return { ...state, diameterFilament: action.payload, };
        case FAILURE_RATE: return { ...state, failureRate: action.payload };
        case TYPE_FILAMENT: return { ...state, typeFilament: action.payload };
        default: return state;
    }
}