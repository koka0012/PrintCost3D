import React, { Component } from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';

import styles from './styles';
import { bindActionCreators } from 'redux';
import * as printerActions from '../../config/store/actions/configurations/printerActions';

import TextInputBox from '../../components/TextInputBox';

import { connect } from 'react-redux';

class Printer extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: screenProps.t('configScreen:printers:title'),

  });

  handleChangeText(text, type) {
    let {ChangeCostKWh, ChangeWattsUsage, ChangeRepairRate, ChangePrinterValue, ChangeHourPerDay, ChangeDayPerMonth} = this.props;
    if(isNaN(text)){

    }else{
      switch(type){
        case 'wattsUsage':ChangeWattsUsage(text); break;
        case 'costKWh': ChangeCostKWh(text); break;
        case 'printerValue': ChangePrinterValue(text); break;
        case 'hourPerDay': ChangeHourPerDay(text); break;
        case 'dayPerMonth': ChangeDayPerMonth(text); break;
      }
    }
  }

  render() {
    let {wattsUsage, costKWh, lifeSpan, printerValue, returnInvestiment, hourPerDay, dayPerMonth, repairRate} = this.props.printerReducer;
    let {ChangeLifeSpan, ChangeReturnInvestiment, ChangeRepairRate} = this.props;
    let t = this.props.screenProps.t;

    return (
      <ScrollView style={styles.container}>
<TextInputBox
          descriptionIcon={false}
          name={t('configScreen:printers:wattsUsage')}
          placeholder='999 KWh'
          value={wattsUsage}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'wattsUsage')}
        />
        
        <TextInputBox
          descriptionIcon={false}
          name={t('configScreen:printers:costKWh')}
          placeholder='R$ 999'
          value={costKWh}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'costKWh')}
        />

        <View style={styles.subContainer}>
          <Text
            style={styles.text}
          >{t('configScreen:printers:lifespan')}</Text>
          <Picker
            selectedValue={lifeSpan}
            onValueChange={(item)=> ChangeLifeSpan(item)}
            style={styles.picker}

          >          
            <Picker.Item label='3' value='3' />
            <Picker.Item label='6' value='6' />
            <Picker.Item label='9' value='9' />
            <Picker.Item label='12' value='12' />
            <Picker.Item label='18' value='18' />
            <Picker.Item label='24' value='24' />
            <Picker.Item label='36' value='36' />
            <Picker.Item label='72' value='72' />

          </Picker>
        </View>


        <TextInputBox
          descriptionIcon={false}
          name={t('configScreen:printers:printerValue')}
          placeholder='R$ 9999'
          value={printerValue}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'printerValue')}
        />

       
        <View style={styles.subContainer}>
          <Text
            style={styles.text}
          >{t('configScreen:printers:ROI')}</Text>
          <Picker
            selectedValue={returnInvestiment}
            onValueChange={(item) => ChangeReturnInvestiment(item)}
            style={styles.picker}
          >
            <Picker.Item label='3' value='3' />
            <Picker.Item label='6' value='6' />
            <Picker.Item label='9' value='9' />
            <Picker.Item label='12' value='12' />
            <Picker.Item label='18' value='18' />
            <Picker.Item label='24' value='24' />
            <Picker.Item label='33' value='36' />
            <Picker.Item label='72' value='72' />
          </Picker>
        </View>

        <View style={styles.subContainer}>
          <Text
            style={styles.text}
          >{t('configScreen:printers:repairRate')}</Text>
          <Picker
            selectedValue={repairRate}
            onValueChange={(item) => ChangeRepairRate(item)}
            style={styles.picker}
          >
            <Picker.Item label='10%' value='0.1' />
            <Picker.Item label='20%' value='0.2' />
            <Picker.Item label='30%' value='0.3' />
            <Picker.Item label='40%' value='0.4' />
            <Picker.Item label='50%' value='0.5' />
            <Picker.Item label='60%' value='0.6' />
            <Picker.Item label='70%' value='0.7' />
            <Picker.Item label='80%' value='0.8' />
          </Picker>
        </View>

<TextInputBox
          descriptionIcon={false}
          name={t('configScreen:printers:hourUsedPerDay')}
          placeholder={'24 ' + t('configScreen:printers:hours')}
          value={hourPerDay}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'hourPerDay')}
        />

<TextInputBox
          descriptionIcon={false}
          name={t('configScreen:printers:dayPerMonth')}
          placeholder={'30 '+ t('configScreen:printers:days')}
          value={dayPerMonth}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'dayPerMonth')}
        />

      </ScrollView>
    );
  }
}
const mapStateToProps = state => (
  {
  printerReducer: state.configReducers.printerReducer,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(printerActions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Printer);
