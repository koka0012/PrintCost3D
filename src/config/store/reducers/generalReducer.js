import {
    TEXT_INFO_BUTTON,
    CLOSE_INFO_BUTTON,
    VISIBLE_INFO_BUTTON,
    CLOSE_CLEAR_BUTTON,
    VISIBLE_CLEAR_BUTTON
} from '../types/generalTypes';


const INITIAL_STATE = {
    visibleInfoButton: false,
    titleInfoButton: '',
    textInfoButton: '',
    visibleClearButton: false,
};

export default generalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VISIBLE_INFO_BUTTON: return {
            ...state,
            visibleInfoButton: action.payload.visibleInfoButton,
            titleInfoButton: action.payload.titleInfoButton,
            textInfoButton: action.payload.textInfoButton,
        };
        case CLOSE_INFO_BUTTON: return {
            ...state,
            visibleInfoButton: action.payload,
        };
        case VISIBLE_CLEAR_BUTTON: return {
            ...state,
            visibleClearButton: action.payload,
        };
        case CLOSE_CLEAR_BUTTON: return {
            ...state,
            visibleClearButton:action.payload
        }
        default: return state;
    }
}