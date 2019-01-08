import { combineReducers } from 'redux'
import generalReducer from './generalReducer';
import calculatorDataReducer from './calculator/calculatorDataReducer';
import dataElementsReducer from './calculator/dataElementsReducer';
import configReducers from './configurations';

const reducers = combineReducers({
    configReducers: configReducers,
    generalReducer: generalReducer,
    calculatorDataReducer: calculatorDataReducer,
    dataElementsReducer: dataElementsReducer
});

export default reducers;