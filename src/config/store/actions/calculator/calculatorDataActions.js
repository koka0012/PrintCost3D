import {
    FILAMENT_USAGE, HOUR_PRINT, MINUTE_PRINT, ADD_DATA, TOTAL_DATA, ERROR_DATA
} from '../../types/calculator/CalculatorTypes';

import { verifyInputErrors, calculateAllPrice, addTotal, deleteTotal } from './util';
import printer from '../../../../scenes/configurations/printer';

import NavigationService from '../../../routes/NavigationService';

export const ChangeFilamentUsage = (text) => ({
    type: FILAMENT_USAGE,
    payload: text
});

export const ChangeHour = (text) => ({
    type: HOUR_PRINT,
    payload: text
});

export const ChangeMinute = (text) => ({
    type: MINUTE_PRINT,
    payload: text
});

export const ClearDataFlatList = (ObjectData, DataReducers) => {

    DataReducers.length = 0
    ObjectData.totalFilamentUsage = 0
    ObjectData.totalHourPrint = 0
    ObjectData.totalMinutePrint = 0
    ObjectData.totalValuePrint = 0
    ObjectData.valuePrintLine = 0
    ObjectData.ROICost = 0
    ObjectData.depreciationCost = 0
    ObjectData.energyCost = 0
    ObjectData.failureCost = 0
    ObjectData.filamentCost = 0
    ObjectData.finishesCost = 0
    ObjectData.repairCost = 0
    ObjectData.totalFilamentCost = 0
    ObjectData.totalEnergyCost = 0
    ObjectData.totalRepairCost = 0
    ObjectData.totalFailureCost = 0
    ObjectData.totalFinishesCost = 0
    ObjectData.totalDepreciationCost = 0
    ObjectData.totalAdministrationCost = 0
    ObjectData.totalROICost = 0
}


export const DataFlatListChange = (LineData, ObjectData, ObjectReducers, screenProps, type) => {
    /*
        Obtendo os Reducers de configuração
    */
    let filamentConfig = ObjectReducers.filamentReducer;
    let printerConfig = ObjectReducers.printerReducer;
    let administrativeConfig = ObjectReducers.administrativeReducer;
    let finishesConfig = ObjectReducers.finishesReducer;

    let { filamentUsage, hourPrint, minutePrint,
        totalFilamentUsage,
        totalHourPrint,
        totalMinutePrint,
        totalValuePrint,
        totalFilamentCost,
        totalEnergyCost,
        totalRepairCost,
        totalFailureCost,
        totalFinishesCost,
        totalDepreciationCost,
        totalAdministrationCost,
        totalROICost,
        filamentCost,
        energyCost,
        repairCost,
        failureCost,
        finishesCost,
        depreciationCost,
        administrationCost,
        ROICost,
        valuePrintLine } = ObjectData;

    for (let i = 0; i < 8; i++) {
        let error = '';
        if (Object.entries(printerConfig)[i][1] === '') {
            error = Object.entries(printerConfig)[i][0]
        }
        if (i < 4) {
            if (Object.entries(filamentConfig)[i][1] === '') {
                error = Object.entries(filamentConfig)[i][0]
            }
        }
        if (error !== '') {
            return dispatch => {
                dispatch({
                    type: ERROR_DATA,
                    payload: screenProps.t(`error:${error}`)
                })
            }
        }
    }


    if (printerConfig.dayPerMonth > 30 || printerConfig.hourPerDay > 24) {
        return dispatch => {
            dispatch({
                type: ERROR_DATA,
                payload: screenProps.t(`error:hourOrDay`)
            })
        }
    }


    if (type === 'add') {

        for (i = 0; i < 2; i++) {
            if (hourPrint === '' && minutePrint !== '') {
                hourPrint = 0;
            } else if (minutePrint === '' && hourPrint !== '') {
                minutePrint = 0;
            }
        }
        if (minutePrint >= 60 || filamentUsage === '' || hourPrint === '' || minutePrint === '' || isNaN(filamentUsage) || isNaN(hourPrint) || isNaN(minutePrint)) {
            return verifyInputErrors(filamentUsage, hourPrint, minutePrint, screenProps);
        }

        totalFilamentUsage += +filamentUsage;
        totalHourPrint += +hourPrint;
        totalMinutePrint += +minutePrint;

        if (totalMinutePrint >= 60) {
            totalMinutePrint %= 60;
            totalHourPrint++;
        }

        [filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine] = calculateAllPrice(filamentUsage, hourPrint, minutePrint, ObjectData, filamentConfig, printerConfig, administrativeConfig, finishesConfig);

        [totalFilamentCost,
            totalEnergyCost,
            totalRepairCost,
            totalFailureCost,
            totalFinishesCost,
            totalDepreciationCost,
            totalAdministrationCost,
            totalROICost,
            totalValuePrint, valuePrintLine] = addTotal(ObjectData, filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine)



    }

    else if (type === 'delete') {

        if (LineData.length === 0) {
            return dispatch => {
                dispatch(
                    {
                        type: ERROR_DATA,
                        payload: screenProps.t('error:noLine')
                    }
                );

            }

        }
        if (LineData.length === 1) {
            console.log(NavigationService)
            return dispatch => {
                dispatch({
                    type: '',
                    payload: (ClearDataFlatList(ObjectData, LineData),NavigationService.navigate('CalcHomeScreen', {}) )
                        
                })
            }
        }
        let { filamentUsageLine,
            hourPrintLine,
            minutePrintLine,
            valuePrintLine } = LineData.pop();

        [filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, valuePrintLine] = calculateAllPrice(filamentUsageLine, hourPrintLine, minutePrintLine, ObjectData, filamentConfig, printerConfig, administrativeConfig, finishesConfig);

        [totalFilamentUsage,
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
            totalValuePrint] = deleteTotal(ObjectData, filamentCost, energyCost, repairCost, failureCost, finishesCost, depreciationCost, administrationCost, ROICost, filamentUsageLine, hourPrintLine, minutePrintLine, valuePrintLine)
    }

    return dispatch => {
        if (type === 'add') {
            dispatch(
                {
                    type: ADD_DATA,
                    payload: { filamentUsageLine: filamentUsage, hourPrintLine: hourPrint, minutePrintLine: minutePrint, valuePrintLine: valuePrintLine }
                }
            );
            dispatch({
                type: FILAMENT_USAGE,
                payload: ''
            })
            dispatch({
                type: HOUR_PRINT,
                payload: ''
            })
            dispatch({
                type: MINUTE_PRINT,
                payload: ''
            })
        }

        dispatch({
            type: TOTAL_DATA,
            payload: { totalFilamentUsage: totalFilamentUsage, totalHourPrint: totalHourPrint, totalMinutePrint: totalMinutePrint, totalValuePrint: totalValuePrint, totalFilamentCost: totalFilamentCost, totalEnergyCost: totalEnergyCost, totalRepairCost: totalRepairCost, totalFailureCost: totalFailureCost, totalFinishesCost: totalFinishesCost, totalDepreciationCost: totalDepreciationCost, totalAdministrationCost: totalAdministrationCost, totalROICost: totalROICost }
        });

    }

}