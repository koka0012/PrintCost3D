import {
    ADMINISTRATIVE_COST, INTERNET_COST, MODELING_COST, OTHERS_COST, PHONE_COST, TAXES_COST
} from '../../types/configurations/administrativeTypes';


export const ChangeModelingCost = (text) => ({
        type: MODELING_COST,
        payload: text    
    });

export const ChangeInternetCost = (text) => ({
    type: INTERNET_COST,
    payload: text
});

export const ChangePhoneCost = (text) => ({
    type: PHONE_COST,
    payload: text
});

export const ChangeAdministrativeCost = (text) => ({
    type: ADMINISTRATIVE_COST,
    payload: text
});

export const ChangeTaxesCost = (text) => ({
    type: TAXES_COST,
    payload: text
});


export const ChangeOthersCost = (text) => ({
    type: OTHERS_COST,
    payload: text
});