import {
    ADD_DATA
} from '../../types/calculator/CalculatorTypes';

const INITIAL_STATE = [];

export default calculatorDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DATA: return [
            ...state,
            {
                filamentUsageLine: action.payload.filamentUsageLine,
                hourPrintLine: action.payload.hourPrintLine,
                minutePrintLine: action.payload.minutePrintLine,
                valuePrintLine: action.payload.valuePrintLine,
            }]
        default: return state;
    }
}