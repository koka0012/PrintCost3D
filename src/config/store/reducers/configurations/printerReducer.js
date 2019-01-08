import {
    COST_KWH,
    WATTS_USAGE,
    LIFE_SPAN,
    PRINTER_VALUE,
    RETURN_INVESTIMENT,
    HOUR_PER_DAY,
    DAY_PER_MONTH,
    REPAIR_RATE,
} from '../../types/configurations/printerTypes'

const INITIAL_STATE = {
    wattsUsage: '300',
    costKWh: '0.5',
    lifeSpan: 72,
    printerValue: '1950',
    repairRate: '0.5',
    returnInvestiment: 24,
    hourPerDay: '18',
    dayPerMonth: '30',
};

export default filamentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WATTS_USAGE: return { ...state, wattsUsage: action.payload };
        case COST_KWH: return { ...state, costKWh: action.payload };
        case LIFE_SPAN: return { ...state, lifeSpan: action.payload };
        case REPAIR_RATE: return { ...state, repairRate: action.payload };
        case PRINTER_VALUE: return { ...state, printerValue: action.payload };
        case RETURN_INVESTIMENT: return { ...state, returnInvestiment: action.payload };
        case HOUR_PER_DAY: return { ...state, hourPerDay: action.payload };
        case DAY_PER_MONTH: return { ...state, dayPerMonth: action.payload };
        default: return state;
    }
}