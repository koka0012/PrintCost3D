import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import * as InfoButtonActions from '../../config/store/actions/generalActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class InfoButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { visibleInfoButton, titleInfoButton, textInfoButton, } = this.props.generalReducer;
        return (
            <Modal
                visible={visibleInfoButton}
                animationType='fade'
                onRequestClose={() => false}
                transparent={true}

                style={styles.modal}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1 }}>
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => this.props.CloseInfoButton()}
                        >
                            <Icon
                                name='close'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>{titleInfoButton}</Text>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}>{textInfoButton}</Text>

                        </View>
                    </View>
                </View>
            </Modal>

        );
    }
}

mapStateToProps = state => (
    {
        generalReducer: state.generalReducer
    })

mapDispatchToProps = dispatch => (
    bindActionCreators(InfoButtonActions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(InfoButton);