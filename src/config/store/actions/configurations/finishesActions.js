import {
    INK_COST, LABOR_COST, OTHER_COST, PRIMER_COST, VARNISH_COST
} from '../../types/configurations/finishesTypes';

export const ChangePrimerCost = (text) => ({
    type: PRIMER_COST,
    payload: text
});

export const ChangeInkCost = (text) => ({
    type: INK_COST,
    payload: text
});

export const ChangeVarnishCost = (text) => ({
    type: VARNISH_COST,
    payload: text
});

export const ChangeLaborCost = (text) => ({
    type: LABOR_COST,
    payload: text
});

export const ChangeOtherCost = (text) => ({
    type: OTHER_COST,
    payload: text
});