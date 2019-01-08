
/*
* Importing all packages usage in this Screen
*/

/* 
React and React-Native Packages
*/
import React, { Component } from "react";
import { View, Text, TextInput, Button, FlatList, Alert } from "react-native";

/*
Icons and Styles Packages
*/
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { metrics, fonts, colors } from "../../styles";

import styles from "./styles";

/*
Redux and Actions Packages
*/
import * as calculatorDataActionsCreators from '../../config/store/actions/calculator/calculatorDataActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { verifyInputErrors } from "../../config/store/actions/calculator/util";



class calcHome extends Component {

  /**
   * React Navigation configs for this screen
   */
  static navigationOptions = ({ navigation, screenProps }) => (
    {
    
    title: screenProps.t('calculatorScreen:title'),
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Open Sans Regular',
      fontSize: fonts.biggest,
    },
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        color="white"
        style={{ padding: metrics.normalMagin }}
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerRight: (
      < View style={{ flexDirection: 'row' }} >
        <Icon
          name='file-document-outline'
          size={30}
          color='white'
          style={{ padding: metrics.normalMagin }}
          onPress={() => navigation.navigate('DetailsScreen', {})}
        />
      </View >
    )

  });


  /**
   * Change text handle
   */


  _handleChangeText(text, type) {
    let { ChangeFilamentUsage, ChangeHour, ChangeMinute } = this.props.calculatorDataActions;

    if (isNaN(text)) {

    } else {
      switch (type) {
        case 'filamentUsage': ChangeFilamentUsage(text); break;
        case 'hourPrint': ChangeHour(text); break;
        case 'minutePrint': ChangeMinute(text); break;
        default: break;
      }
    }
  }


  /**
   * Delete Button
   */

  _deleteButton() {
    let t = this.props.screenProps.t;
    Alert.alert(t('components:clearList:title'), t('components:clearList:text'),
      [{
        text: t('components:btn:all'), onPress: () => {
          Alert.alert(t('components:btn:confirm'), t('components:clearList:confirmText'),
            [{ text: t('components:btn:yes'), onPress: () => { this._clearList() } },
            { text: t('components:btn:no') }
            ])
        }
      },
      { text: t('components:btn:lastLine'), onPress: () => { this._dataChange('delete'), console.log(this.props.calculatorDataReducer) } },
      { text: t('components:btn:cancel') }]
    )

  }

  _dataChange(type) {
    let { ChangeFilamentUsage, ChangeHour, ChangeMinute, DataFlatListChange } = this.props.calculatorDataActions;
    let { calculatorDataReducer, dataElementsReducer, configReducers } = this.props;
    let { filamentUsage, hourPrint, minutePrint } = this.props.dataElementsReducer;

    if (type === 'add') {

      DataFlatListChange(calculatorDataReducer, dataElementsReducer, configReducers, 'add');

    } else if (type === 'delete') {
      DataFlatListChange(calculatorDataReducer, dataElementsReducer, configReducers, 'delete');
    }
  }


  /**
   * Clear List Button
   */
  _clearList() {
    calculatorDataActionsCreators.ClearDataFlatList(this.props.dataElementsReducer, this.props.calculatorDataReducer), this.props.navigation.navigate('CalcHomeScreen', {})
  }

  /**
   * Header of FlatList Component
   */
  renderHeader() { 
    let t = this.props.screenProps.t;
    return (
      <View style={styles.headerFlatList}>
        <Text style={[styles.text, { flex: 2 }]}>{t('calculatorScreen:filamentUsage')}</Text>
        <Text style={[styles.text, { flex: 1 }]}>{t('calculatorScreen:hour')}:Min</Text>
        <Text style={[styles.text, { flex: 1 }]}>{t('calculatorScreen:$')}</Text>
      </View>
    );
  }

  /**
   * Rendering the FlatList Items
   */
  renderList(item) {
    let t = this.props.screenProps.t;

    const { filamentUsageLine, hourPrintLine, minutePrintLine, valuePrintLine } = item.item;
    return (
      <View style={styles.contentFlatList}>
        <Text style={[styles.text, { flex: 2 }]}>{filamentUsageLine}</Text>
        <Text style={[styles.text, { flex: 1 }]}>{hourPrintLine}:{minutePrintLine}</Text>
        <Text style={[styles.text, { flex: 1 }]}>{t('calculatorScreen:$')} {valuePrintLine}</Text>
      </View>
    );
  }

  render() {
    let t = this.props.screenProps.t;
    let { filamentUsage, minutePrint, hourPrint, totalFilamentUsage, totalHourPrint, totalMinutePrint, totalValuePrint } = this.props.dataElementsReducer;

    return (
      <View style={styles.Container}>
        <View style={styles.flatContainer}>
          <FlatList
            ref={(ref) => { this._list = ref }}
            style={styles.FlatList}
            keyExtractor={(item, index) => index.toString()}
            data={this.props.calculatorDataReducer}
            renderItem={(item) => this.renderList(item)}
            ListHeaderComponent={this.renderHeader()}
          />
          <Text style={[styles.subtotalText, { borderTopWidth: 1 }]}> {t('calculatorScreen:subtotal')}</Text>
          <View style={styles.containerSubTotal}>
            <Text style={[styles.subtotalText, { flex: 2 }]}>{t('calculatorScreen:filamentUsage')}</Text>
            <Text style={[styles.subtotalText, { flex: 1 }]}>{t('calculatorScreen:totalTime')}</Text>
            <Text style={[styles.subtotalText, { flex: 1 }]}>{t('calculatorScreen:totalCost')}</Text>
          </View>
          <View style={styles.containerSubTotal}>
            <Text style={[styles.subtotalText, { flex: 2 }]}>{totalFilamentUsage}</Text>
            <Text style={[styles.subtotalText, { flex: 1 }]}>{totalHourPrint}:{totalMinutePrint}</Text>
            <Text style={[styles.subtotalText, { flex: 1 }]}>{t('calculatorScreen:$')} {totalValuePrint}</Text>
          </View>
        </View>

        <View style={styles.contentTextInput}>
          <TextInput
            ref={(ref) => { this._filamentInput = ref }}
            style={[styles.TextInput, { flex: 2 }]}
            placeholder={t('calculatorScreen:filamentUsage')}
            keyboardType='numeric'
            underlineColorAndroid='black'
            value={filamentUsage}
            onChangeText={(text) => this._handleChangeText(text, 'filamentUsage')}
            blurOnSubmit={false}
            onSubmitEditing={() => this._hourInput.focus()}
          />

          <TextInput
            ref={(ref) => { this._hourInput = ref }}
            style={[styles.TextInput, { flex: 1 }]}
            placeholder={t('calculatorScreen:hour')}
            keyboardType='numeric'
            underlineColorAndroid='black'
            value={hourPrint}
            onChangeText={(text) => this._handleChangeText(text, 'hourPrint')}
            blurOnSubmit={false}
            onSubmitEditing={() => this._minuteInput.focus()}
          />
          <TextInput
            ref={(ref) => { this._minuteInput = ref }}
            style={[styles.TextInput, { flex: 1 }]}
            placeholder={t('calculatorScreen:minutes')}
            keyboardType='numeric'
            underlineColorAndroid='black'
            value={minutePrint}
            onChangeText={(text) => this._handleChangeText(text, 'minutePrint')}
            onSubmitEditing={() => { this._dataChange('add') }}
          />

        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={t('components:btn:add')}
            color={colors.success}
            onPress={() => { this._dataChange('add') }}
          />
          <Button
            title={t('components:btn:delete')}
            color={colors.cancel}
            onPress={() => { this._deleteButton() }}
          />
        </View>
      </View>
    );
  }
}
/**
 * Setting the state reducers used in the Screen
 */
mapStateToProps = state => (
  {
    calculatorDataReducer: state.calculatorDataReducer,
    dataElementsReducer: state.dataElementsReducer,
    configReducers: state.configReducers,

  });

/**
 * Setting the Dispatch used in the screen
 */
mapDispatchToProps = dispatch => ({
  calculatorDataActions: bindActionCreators(calculatorDataActionsCreators, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(calcHome);
