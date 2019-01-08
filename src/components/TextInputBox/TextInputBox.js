import React, {Component} from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as InfoButtonActionsCreators from '../../config/store/actions/generalActions';

import styles from './styles'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class TextInputBox extends Component {
  render() {
    if (this.props.descriptionIcon === true) {
        return (
            <View style={[styles.container, {marginBottom: this.props.marginBottom }]}>
                <View style={styles.header}>
                    <Text style={styles.text}> {this.props.name} </Text>
                    <TouchableOpacity
                        onPress={() => this.props.infoActions.OpenInfoButton(this.props.infoTitle, this.props.infoText)}
                    >
                        <Icon name='information-outline' size={25} color='gray' />

                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    style={[styles.textInput, styles.text]}
                    keyboardType={this.props.keyboardType}
                    blurOnSubmit={this.props.blurOnSubmit}
                    keyboardAppearance={this.props.keyboardAppearance}
                    onChangeText={this.props.onChangeText}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />
            </View>
        )

    }

    else {
        return (
            <View style={[styles.container, {marginBottom: this.props.marginBottom }]}>
                <View style={[styles.header, { justifyContent: 'flex-start' }]}>
                    <Text style={styles.text}> {this.props.name} </Text>
                </View>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    style={[styles.textInput, styles.text]}
                    keyboardType={this.props.keyboardType}
                    blurOnSubmit={this.props.blurOnSubmit}
                    keyboardAppearance={this.props.keyboardAppearance}
                    onChangeText={this.props.onChangeText}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />
            </View>
        )
    }
  }
}

const mapDispatchToProps = dispatch => {
    return {
        infoActions: bindActionCreators(InfoButtonActionsCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(TextInputBox)