/*
Aqui estão as funções para realizar os calculos dos preços, sendo estes divididos por:
 - Custo de Material
 - Custo de Energia
 - Custo de Reparo
 - Custo de Falhas
 - Custo de Acabamentos
 - Custo de Depreciação
 - Custo de Retorno de Investimento

*/

/* 
Função para realizar o calculo do material usado para a impressão
*/

export const MaterialCost = (pricePound, filamentUsage, diameterFilament, typeFilament) => {
        let density;
        switch (typeFilament) {
                case 'abs': density = 1.04; break;
                case 'pla': density = 1.24; break;
                case 'petg': density = 1.25; break;
                default: density = 1.04;
        }

        let weight = (filamentUsage / 1000) * diameterFilament * density
        return (
                weight * (pricePound / 1000)
        );
}


/* 
Função para realizar o calculo do custo energético
*/
export const EnergyCost = (wattsUsage, hour, minute, wattsCost) => {


        minuteUsage = (+hour + (+minute / 60))
        return (
                ((wattsUsage / 1000) * minuteUsage * wattsCost)
        );
}


/* 
Função para realizar o calculo do custo com reparos
*/
export const RepairCost = (materialCost, repairRate) => {

        return (materialCost * repairRate);
}


/* 
Função para realizar o calculo de falhas na impressão
*/
export const FailCost = (materialCost, failRate) => {
        return +materialCost * +failRate;
}


/* 
Função para realizar o calculo para os materiais de acabamento
*/
export const FinishesCost = (primerCost, inkCost, varnishCost, laborCost, otherCost, hour, minute) => {
        let finishesHour = (+hour * 60 + +minute) * ((+primerCost + +inkCost + +varnishCost + +laborCost + +otherCost) / 43200);
        return finishesHour;
}


/* 
Função para realizar o calculo de depreciação da impressora
*/
export const DepreciationCost = (printerCost, lifeSpan, hour, minute) => {
        let depreciationHour = (+printerCost / (+lifeSpan * 43200)) * (+hour * 60 + +minute);
        return depreciationHour;
}

export const AdministrativeCost = (administrativeCost, internetCost, modelingCost, phoneCost, taxesCost, otherCost,  hour, minute) => {
        let totalAdministrationCost = (+administrativeCost + +internetCost + +modelingCost + +phoneCost + +taxesCost + +otherCost);

        totalAdministrationCost = (totalAdministrationCost / 42300) * (+hour * 60 + +minute)

        return totalAdministrationCost;
}

/* 
Função para realizar o calculo do retorno de investimento
*/
export const ROICost = (printerCost, hourDay, dayMonth, timeROI, hour, minute) => {
        return (
                (+printerCost / (+hourDay * +dayMonth * +timeROI)) * (+hour + (+minute / 60))
        )
}