import { combineReducers } from 'redux'
import filamentReducer from './filamentReducer';
import printerReducer from './printerReducer';
import finishesReducer from './finishesReducer';
import administrativeReducer from './administrativeReducer';

export default configReducers = combineReducers ({
    filamentReducer: filamentReducer,
    printerReducer: printerReducer,
    finishesReducer: finishesReducer,
    administrativeReducer: administrativeReducer,
})