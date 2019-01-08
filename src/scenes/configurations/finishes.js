import React, { Component } from 'react';
import { ScrollView } from 'react-native';


import styles from './styles';


import * as InfoButtonActionsCreators from '../../config/store/actions/generalActions';
import * as finishesActionsCreators from '../../config/store/actions/configurations/finishesActions';
import InfoButton from '../../components/InfoButton';
import TextInputBox from '../../components/TextInputBox';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Finishes extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: screenProps.t('configScreen:finishes:title')
  })

 

  handleChangeText(text, type) {
    let { ChangePrimerCost, ChangeInkCost, ChangeVarnishCost, ChangeLaborCost, ChangeOtherCost } = this.props.finishesAction;

    if(isNaN(text)) {

    } else {
      switch (type) {
        case 'primer': ChangePrimerCost(text); break;
        case 'ink': ChangeInkCost(text); break;
        case 'varnish': ChangeVarnishCost(text); break;
        case 'labor': ChangeLaborCost(text); break;
        case 'otherCost': ChangeOtherCost(text); break;
      }
    }
  }

  render() {

    let t = this.props.screenProps.t;

     let { inkCost, laborCost, otherCost, primerCost, varnishCost } = this.props.finishesReducer;

    return (
      <ScrollView style={styles.container}>
        <InfoButton />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:primer')}
          infoText={t('components:infoButton:description:primer')}
          name={t('components:infoButton:title:primer')}
          placeholder='R$ 999'
          value={primerCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'primer')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:ink')}
          infoText={t('components:infoButton:description:ink')}
          name={t('components:infoButton:title:ink')}
          placeholder='R$ 999'
          value={inkCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'ink')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:varnish')}
          infoText={t('components:infoButton:description:varnish')}
          name={t('components:infoButton:title:varnish')}
          placeholder='R$ 999'
          value={varnishCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'varnish')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:labor')}
          infoText={t('components:infoButton:description:labor')}
          name={t('components:infoButton:title:labor')}
          placeholder='R$ 999'
          value={laborCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'labor')}
        />

        <TextInputBox
          descriptionIcon={true}
          infoTitle={t('components:infoButton:title:others')}
          infoText={t('components:infoButton:description:othersCost')}
          name={t('components:infoButton:title:others')}
          marginBottom={10}
          placeholder='R$ 999'
          value={otherCost}
          keyboardType='numeric'
          blurOnSubmit={true}
          keyboardAppearance='light'
          onChangeText={(text) => this.handleChangeText(text, 'otherCost')}
        />
      </ScrollView>
    );
  }
}

mapStateToProps = state => (
  {
    generalReducer: state.generalReducer,
    finishesReducer: state.configReducers.finishesReducer,
  })

mapDispatchToProps = dispatch => {
  return {
    infoActions: bindActionCreators(InfoButtonActionsCreators, dispatch),
    finishesAction: bindActionCreators(finishesActionsCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Finishes);
