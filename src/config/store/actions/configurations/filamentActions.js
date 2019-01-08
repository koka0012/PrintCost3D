import {
PRICE_POUND,
FAILURE_RATE,
DIAMETER_FILAMENT,
TYPE_FILAMENT
} from '../../types/configurations/filamentTypes'

export const ChangePound = (text) => {
    return {
        type: PRICE_POUND,
        payload: text
    }
}

export const ChangeDiameter = (diameter) => {
    return {
        type: DIAMETER_FILAMENT,
        payload: diameter
    }
}

export const ChangeType = (type) =>{
    return {
        type: TYPE_FILAMENT,
        payload: type,
    }
}

export const ChangeRate = (rate) => {
    return {
        type: FAILURE_RATE,
        payload: rate
    }
}