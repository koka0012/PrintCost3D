import {
    INK_COST, LABOR_COST, OTHER_COST, PRIMER_COST, VARNISH_COST
} from '../../types/configurations/finishesTypes';

const INITIAL_STATE = {
    primerCost: '',
    inkCost: '',
    varnishCost: '',
    laborCost: '',
    otherCost: '',
}

export default finishesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRIMER_COST: return{...state, primerCost: action.payload}; break;
        case INK_COST: return {...state, inkCost: action.payload} ; break;
        case VARNISH_COST: return {...state, varnishCost: action.payload} ; break;
        case LABOR_COST: return {...state, laborCost: action.payload}; break;
        case OTHER_COST: return {...state, otherCost: action.payload}; break;
        default: return state;
    }
}