import {
    FILAMENT_USAGE, HOUR_PRINT, MINUTE_PRINT, VALUE_PRINT, TOTAL_DATA, CALCULATE_COST, ERROR_DATA} from '../../types/calculator/CalculatorTypes';



const INITIAL_STATE = {
    filamentUsage: '',
    hourPrint: '',
    minutePrint: '',
    valuePrintLine: 0,
    totalFilamentUsage: 0,
    totalHourPrint: 0,
    totalMinutePrint: 0,
    totalValuePrint: 0,
    filamentCost: 0,
    energyCost: 0,
    repairCost: 0,
    failureCost: 0,
    finishesCost: 0,
    depreciationCost: 0,
    administrationCost: 0,
    ROICost: 0,
    totalFilamentCost: 0,
    totalEnergyCost: 0,
    totalRepairCost: 0,
    totalFailureCost: 0,
    totalFinishesCost: 0,
    totalDepreciationCost: 0,
    totalAdministrationCost: 0,
    totalROICost: 0,
};

export default dataElementsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILAMENT_USAGE: return { ...state, filamentUsage: action.payload }
        case HOUR_PRINT: return { ...state, hourPrint: action.payload }
        case MINUTE_PRINT: return { ...state, minutePrint: action.payload }
        case TOTAL_DATA: return {
            ...state,
            valuePrintLine: action.payload.valuePrintLine,
            totalFilamentUsage: action.payload.totalFilamentUsage,
            totalHourPrint: action.payload.totalHourPrint,
            totalMinutePrint: action.payload.totalMinutePrint,
            totalValuePrint: action.payload.totalValuePrint,
            totalFilamentCost: action.payload.totalFilamentCost,
            totalEnergyCost: action.payload.totalEnergyCost,
            totalRepairCost: action.payload.totalRepairCost,
            totalFailureCost: action.payload.totalFailureCost,
            totalFinishesCost: action.payload.totalFinishesCost,
            totalDepreciationCost: action.payload.totalDepreciationCost,
            totalAdministrationCost: action.payload.totalAdministrationCost,
            totalROICost: action.payload.totalROICost

        }
       
        case CALCULATE_COST: return {
            ...state,
            filamentCost: action.payload.filamentCost,
            energyCost: action.payload.energyCost,
            repairCost: action.payload.repairCost,
            failureCost: action.payload.failureCost,
            finishesCost: action.payload.finishesCost,
            depreciationCost: action.payload.depreciationCost,
            administrationCost: action.payload.administrationCost,
            ROICost: action.payload.ROICost
        }
        default: return state;
    }
}