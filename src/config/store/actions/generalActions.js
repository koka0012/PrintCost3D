import {
    TEXT_INFO_BUTTON,
    CLOSE_INFO_BUTTON,
    VISIBLE_INFO_BUTTON,
    VISIBLE_CLEAR_BUTTON,
    CLOSE_CLEAR_BUTTON,
} from '../types/generalTypes';

const OpenClearButton = () => ({
    type:VISIBLE_CLEAR_BUTTON,
    payload:{visibleClearButton:true}
})

const CloseClearButton = () => ({
    type:CLOSE_CLEAR_BUTTON,
    payload:{visibleClearButton:false}
})

const OpenInfoButton = (title, description) => ({
    type: VISIBLE_INFO_BUTTON,
    payload: {visibleInfoButton: true, titleInfoButton: title, textInfoButton: description}
});

const CloseInfoButton = () => ({
    type: CLOSE_INFO_BUTTON,
    payload: false
});


export {CloseInfoButton, OpenInfoButton, CloseClearButton, OpenClearButton} 