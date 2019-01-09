import { ERROR_DATA, MINUTE_PRINT } from "../../types/calculator/CalculatorTypes";

import * as Calculate from './calculatorActions';

export const verifyInputErrors = (filamentUsage, hourPrint, minutePrint, screenProps) => {

let t = screenProps.t;

    if (isNaN(filamentUsage) || isNaN(hourPrint) || isNaN(minutePrint)) {
        return ({
            type: ERROR_DATA,
            payload: t('error:onlyNumbers')
        })
    }
    else if (minutePrint >= 60) {
        return dispatch => {
            dispatch({
                type: ERROR_DATA,
                payload: t('error:minutesHigh')
            })
            dispatch({
                type: MINUTE_PRINT,
                payload: ''
            })
        }
    }
    else if (filamentUsage === '') {
        return dispatch => {
            dispatch(
                {
                    type: ERROR_DATA,
                    payload: t('error:addFilament')
                }
            )
        }
    }
    else if(hourPrint === '' && minutePrint === ''){
        return dispatch => {
            dispatch({
                type: ERROR_DATA,
                payload: t('error:addTime')
            })
        }
    } 
}

export const calculateAllPrice = (filamentUsage, hourPrint, minutePrint, ObjectData, filamentConfig, printerConfig, administrativeConfig, finishesConfig) => {

    let { filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine } = ObjectData;

    let { pricePound, typeFilament, diameterFilament, failureRate } = filamentConfig;
    let { wattsUsage, costKWh, lifeSpan, repairRate, printerValue, returnInvestiment, hourPerDay, dayPerMonth } = printerConfig;
    let { administrativeCost, internetCost, modelingCost, phoneCost, taxesCost } = administrativeConfig;
    let { inkCost, laborCost, otherCost, primerCost, varnishCost } = finishesConfig;

    filamentCost = Calculate.MaterialCost(pricePound, filamentUsage, diameterFilament, typeFilament);
    energyCost = Calculate.EnergyCost(wattsUsage, hourPrint, minutePrint, costKWh);
    repairCost = Calculate.RepairCost(filamentCost, repairRate);
    failureCost = Calculate.FailCost(filamentCost, failureRate);
    finishesCost = Calculate.FinishesCost(primerCost, inkCost, varnishCost, laborCost, otherCost, hourPrint, minutePrint);
    depreciationCost = Calculate.DepreciationCost(printerValue, lifeSpan, hourPrint, minutePrint);
    administrationCost = Calculate.AdministrativeCost(administrativeCost, internetCost, modelingCost, phoneCost, taxesCost, otherCost, hourPrint, minutePrint);
    ROICost = Calculate.ROICost(printerValue, hourPerDay, dayPerMonth, returnInvestiment, hourPrint, minutePrint);

    valuePrintLine = (filamentCost + energyCost + repairCost + failureCost + finishesCost + depreciationCost + administrationCost + ROICost);
    return [filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine]
}

export const addTotal = (ObjectData, filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine) => {

    let { totalFilamentCost,
        totalEnergyCost,
        totalRepairCost,
        totalFailureCost,
        totalFinishesCost,
        totalDepreciationCost,
        totalAdministrationCost,
        totalROICost,
        totalValuePrint } = ObjectData;


    totalFilamentCost += filamentCost;
    totalEnergyCost += energyCost;
    totalRepairCost += repairCost;
    totalFailureCost += failureCost;
    totalFinishesCost += finishesCost;
    totalDepreciationCost += depreciationCost;
    totalAdministrationCost += administrationCost;
    totalROICost += ROICost;
    totalValuePrint += valuePrintLine;


    totalFilamentCost = parseFloat(totalFilamentCost.toFixed(2));
    totalEnergyCost = parseFloat(totalEnergyCost.toFixed(2));
    totalRepairCost = parseFloat(totalRepairCost.toFixed(2));;
    totalFailureCost = parseFloat(totalFailureCost.toFixed(2));
    totalFinishesCost = parseFloat(totalFinishesCost.toFixed(2));
    totalDepreciationCost = parseFloat(totalDepreciationCost.toFixed(2));
    totalAdministrationCost = parseFloat(totalAdministrationCost.toFixed(2));
    totalROICost = parseFloat(totalROICost.toFixed(2));
    valuePrintLine = parseFloat(valuePrintLine.toFixed(2));
    totalValuePrint = parseFloat(totalValuePrint.toFixed(2));

    return [totalFilamentCost, totalEnergyCost, totalRepairCost, totalFailureCost, totalFinishesCost, totalDepreciationCost, totalAdministrationCost, totalROICost, totalValuePrint, valuePrintLine]
}

export const deleteTotal = (ObjectData, filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, filamentUsageLine, hourPrintLine, minutePrintLine, valuePrintLine) => {


    let { totalFilamentUsage,
        totalHourPrint,
        totalMinutePrint,
        totalFilamentCost,
        totalEnergyCost,
        totalRepairCost,
        totalFailureCost,
        totalFinishesCost,
        totalDepreciationCost,
        totalAdministrationCost,
        totalROICost,
        totalValuePrint } = ObjectData;

    

    totalFilamentCost -= filamentCost;
    totalEnergyCost -= energyCost;
    totalRepairCost -= repairCost;
    totalFailureCost -= failureCost;
    totalFinishesCost -= finishesCost;
    totalDepreciationCost -= depreciationCost;
    totalAdministrationCost -= administrationCost;
    totalROICost -= ROICost;
    totalValuePrint -= valuePrintLine;

   

    totalFilamentCost = parseFloat(totalFilamentCost.toFixed(2));
    totalEnergyCost = parseFloat(totalEnergyCost.toFixed(2));
    totalRepairCost = parseFloat(totalRepairCost.toFixed(2));;
    totalFailureCost = parseFloat(totalFailureCost.toFixed(2));
    totalFinishesCost = parseFloat(totalFinishesCost.toFixed(2));
    totalDepreciationCost = parseFloat(totalDepreciationCost.toFixed(2));
    totalAdministrationCost = parseFloat(totalAdministrationCost.toFixed(2));
    totalROICost = parseFloat(totalROICost.toFixed(2));
    totalValuePrint = parseFloat(totalValuePrint.toFixed(2));
    valuePrintLine = parseFloat(valuePrintLine.toFixed(2));

    totalFilamentUsage -= parseFloat(filamentUsageLine).toFixed(2);
    totalHourPrint -= parseFloat(hourPrintLine).toFixed(2);
    totalMinutePrint -= parseFloat(minutePrintLine).toFixed(2);

    if (totalMinutePrint < 0) {
        totalHourPrint--;
        totalMinutePrint += 60
    }
    
    
    return [totalFilamentUsage,
        totalHourPrint,
        totalMinutePrint,
        totalFilamentCost,
        totalEnergyCost,
        totalRepairCost,
        totalFailureCost,
        totalFinishesCost,
        totalDepreciationCost,
        totalAdministrationCost,
        totalROICost,
        totalValuePrint]
}