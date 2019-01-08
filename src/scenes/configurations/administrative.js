import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';


import * as InfoButtonActionsCreators from '../../config/store/actions/generalActions';
import * as administrativeActionsCreators from '../../config/store/actions/configurations/administrativeActions';

import InfoButton from '../../components/InfoButton';

import TextInputBox from '../../components/TextInputBox';

import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

class Administrative extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: screenProps.t('configScreen:administrative:title'),
    headerTitleStyle: {
      fontFamily: 'Open Sans Regular',
    }
  })
 
  _handleChangeText(text, type) {
    const { ChangeModelingCost, ChangePhoneCost, ChangeInternetCost, ChangeAdministrativeCost, ChangeTaxesCost, ChangeOthersCost } = this.props.administrativeActions;

    if (isNaN(text)){

    } else {
      switch (type) {
        case 'modeling': ChangeModelingCost(text); break;
        case 'phone': ChangePhoneCost(text); break;
        case 'internet': ChangeInternetCost(text); break;
        case 'administrative': ChangeAdministrativeCost(text); break;
        case 'taxes': ChangeTaxesCost(text); break;
        case 'others': ChangeOthersCost(text); break;
        default: break;
      }
    }
  }


  render() {

    let t = this.props.screenProps.t;

    let { modelingCost, phoneCost, taxesCost, internetCost, administrativeCost, othersCost } = this.props.administrativeReducer;

    return (
      <ScrollView style={styles.container}>
        <InfoButton />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:modeling')}
          infoText={t('components:infoButton:description:modeling')}
          name={t('components:infoButton:title:modeling')}
          placeholder='R$ 999'
          value={modelingCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'modeling')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:phone')}
          infoText={t('components:infoButton:description:phone')}
          name={t('components:infoButton:title:phone')}
          placeholder='R$ 999'
          value={phoneCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'phone')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:internet')}
          infoText={t('components:infoButton:description:internet')}
          name={t('components:infoButton:title:internet')}
          placeholder='R$ 999'
          value={internetCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'internet')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:administrative')}
          infoText={t('components:infoButton:description:administrative')}
          name={t('components:infoButton:title:administrative')}
          placeholder='R$ 999'
          value={administrativeCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'administrative')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:taxes')}
          infoText={t('components:infoButton:description:taxes')}
          name={t('components:infoButton:title:taxes')}
          placeholder='R$ 999'
          value={taxesCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'taxes')}
        />

        <TextInputBox
          marginBottom={10}
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:others')}
          infoText={t('components:infoButton:description:others')}
          name={t('components:infoButton:title:others')}
          placeholder='R$ 999'
          value={othersCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this._handleChangeText(text, 'others')}
        />

      </ScrollView>
    );
  }
}

mapStateToProps = state => (
  {
    generalReducer: state.generalReducer,
    administrativeReducer: state.configReducers.administrativeReducer,
  })

mapDispatchToProps = dispatch => {
  return {
    infoActions: bindActionCreators(InfoButtonActionsCreators, dispatch),
    administrativeActions: bindActionCreators(administrativeActionsCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Administrative);
