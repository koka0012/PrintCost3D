import React, { Component } from 'react';
import { View, Text, Picker, ScrollView } from 'react-native';

import styles from './styles'

import TextInputBox  from '../../components/TextInputBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as filamentActions from '../../config/store/actions/configurations/filamentActions';



class Filament extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: screenProps.t('configScreen:filaments:title')
    })

    handleChangeText(text) {
        
        if(isNaN(text)){

        }else{

            this.props.ChangePound(text)
        }
    }

    render() {
        let t = this.props.screenProps.t;

        const { pricePound, diameterFilament, typeFilament, failureRate } = this.props.filamentReducer;
        return (
            <ScrollView style={styles.container}>
                <TextInputBox                    
                    descriptionIcon={false}
                    name={t('configScreen:filaments:pricePound')}
                    placeholder='R$ 999'
                    value={pricePound}
                    keyboardType='numeric'
                    blurOnSubmit={true}
                    keyboardAppearance='light'
                    onChangeText={(text) => this.handleChangeText(text)}
                />

                <View style={styles.subContainer}>
                    <Text style={styles.text}>{t('configScreen:filaments:diameterFilament')}</Text>
                    <Picker
                        selectedValue={diameterFilament}
                        style={styles.picker}
                        mode={'dropdown'}
                        onValueChange={(item, index) => this.props.ChangeDiameter(item)}
                    >
                        <Picker.Item label='1,75mm' value={1.75} />
                        <Picker.Item label='3mm' value={3} />
                    </Picker>
                </View>


                <View style={styles.subContainer}>
                    <Text style={styles.text}>{t('configScreen:filaments:filamentType')}</Text>
                    <Picker
                        selectedValue={typeFilament}
                        style={styles.picker}
                        onValueChange={(item, index) => this.props.ChangeType(item)}
                    >
                        <Picker.Item label='ABS' value='abs' />
                        <Picker.Item label='PLA' value='pla' />
                        <Picker.Item label='PETG' value='petg' />
                    </Picker>
                </View>




                <View style={styles.subContainer}>
                    <Text style={styles.text}>{t('configScreen:filaments:failureRate')}</Text>
                    <Picker
                        selectedValue={failureRate}
                        style={styles.picker}
                        onValueChange={(item, index) => this.props.ChangeRate(item)}
                    >
                        <Picker.Item label='10%' value={0.1} />
                        <Picker.Item label='20%' value={0.2} />
                        <Picker.Item label='30%' value={0.3} />
                        <Picker.Item label='40%' value={0.4} />
                        <Picker.Item label='50%' value={0.5} />
                        <Picker.Item label='60%' value={0.6} />
                        <Picker.Item label='70%' value={0.7} />
                        <Picker.Item label='80%' value={0.8} />
                    </Picker>
                </View>



            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    filamentReducer: state.configReducers.filamentReducer,
});

const mapDispatchToProps = dispatch => {
    return (
        bindActionCreators(filamentActions, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filament)
