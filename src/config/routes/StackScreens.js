import React from 'react';

import { View, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import calcHome from '../../scenes/calcHome';
import calcDetail from '../../scenes/calcDetail';
import tabBarConfig from './tabBarConfig';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { metrics, colors } from '../../styles';

import { SaveConfig } from '../util/generalConfig';

const CalcStack = createStackNavigator({
    CalcHomeScreen: {
        screen: calcHome,
    },
    DetailsScreen: {
        screen: calcDetail,
    },

})

const ConfigStack = createStackNavigator({
    ConfigScreen: {
        screen: tabBarConfig,
        navigationOptions: ({ navigation, screenProps }) => ({
            title: screenProps.t('configScreen:title'),
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTitleStyle:{
                fontFamily: 'Open Sans Regular',
            },
            headerLeft: (
                <Icon name='menu' size={30} style={{ padding: metrics.normalMagin }} color='white' onPress={() => navigation.openDrawer()} />
            ),
            headerRight: (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='floppy' size={30} style={{ padding: metrics.normalMagin }} color='white' onPress={() => SaveConfig(navigation, screenProps)} />
                </View>
            )
        }
        )
    }

})


export { CalcStack, ConfigStack}