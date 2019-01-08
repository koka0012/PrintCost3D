import {
    COST_KWH,
    LIFE_SPAN,
    PRINTER_VALUE,
    REPAIR_RATE,
    RETURN_INVESTIMENT,
    HOUR_PER_DAY,
    DAY_PER_MONTH,
    WATTS_USAGE,
 } from '../../types/configurations/printerTypes';

 export const ChangeWattsUsage = (number) => ({
     type: WATTS_USAGE,
     payload: number
 })

 export const ChangeRepairRate = (number) => ({
    type: REPAIR_RATE,
    payload: number
})

 export const ChangeCostKWh = (number) => ({
     type: COST_KWH,
     payload: number
 })

 export const ChangeLifeSpan = (number) => ({
    type: LIFE_SPAN,
    payload: number
})

export const ChangePrinterValue = (number) => ({
    type: PRINTER_VALUE,
    payload: number
})

export const ChangeReturnInvestiment = (number) => ({
    type: RETURN_INVESTIMENT,
    payload: number
})

export const ChangeHourPerDay = (number) => ({
    type: HOUR_PER_DAY,
    payload: number
})

export const ChangeDayPerMonth = (number) => ({
    type: DAY_PER_MONTH,
    payload: number
})