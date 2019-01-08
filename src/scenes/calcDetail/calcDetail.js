import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {colors} from '../../styles';

import styles from './styles';

import { connect } from 'react-redux';
import dataElementsReducer from '../../config/store/reducers/calculator/dataElementsReducer';

class calcDetail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: screenProps.t('detailScreen:title'),
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: colors.primary,
        }
    })

    render() {

        let { totalFilamentCost, totalEnergyCost, totalRepairCost, totalFailureCost, totalFinishesCost, totalDepreciationCost, totalROICost, totalAdministrationCost, totalFilamentUsage, totalHourPrint, totalMinutePrint, totalValuePrint } = this.props.dataElementsReducer;

        let t = this.props.screenProps.t;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={styles.containerSubTop}>
                        <Text style={[styles.textTitle, { flex: 2 }]}>{t('detailScreen:filamentUsage')}</Text>
                        <Text style={[styles.textTitle, , { flex: 1 }]}>{t('detailScreen:hour')}</Text>
                        <Text style={[styles.textTitle, , { flex: 1 }]}>{t('detailScreen:minutes')} </Text>
                    </View>

                    <View style={styles.containerSubTop}>
                        <Text style={[styles.textText, { textAlign: 'center', flex: 2 }]}>{totalFilamentUsage}</Text>
                        <Text style={[styles.textText, { textAlign: 'center', flex: 1 }]}>{totalHourPrint}</Text>
                        <Text style={[styles.textText, { textAlign: 'center', flex: 1 }]}>{totalMinutePrint}</Text>
                    </View>
                </View>
                <View style={styles.containerMiddle}>
                    <View style={styles.containerContentMiddle}>
                        <View style={styles.containerContentType}>
                            <Text style={styles.textTitle}>{t('detailScreen:typeCost')} </Text>
                            <Text style={styles.textText}>{t('detailScreen:filamentCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:energyCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:repairCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:failCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:finishesCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:depreciationCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:administrationCost')}</Text>
                            <Text style={styles.textText}>{t('detailScreen:ROICost')}</Text>
                        </View>
                        <View style={styles.containerContentCost}>
                            <Text style={styles.textTitle}> {t('detailScreen:$')} - </Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalFilamentCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalEnergyCost} </Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalRepairCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalFailureCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalFinishesCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalDepreciationCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalAdministrationCost}</Text>
                            <Text style={styles.textCost}> {t('detailScreen:$')} {totalROICost}</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.containerBottom}>
                    <Text style={styles.textTitle}> {t('detailScreen:totalCost')} </Text>
                    <Text style={styles.textCost}> {t('detailScreen:$')} {totalValuePrint}</Text>
                </View>
            </ScrollView >
        );
    }
}

mapStateToProps = state => (
    {
        dataElementsReducer: state.dataElementsReducer,
    })
export default connect(mapStateToProps, null)(calcDetail);
