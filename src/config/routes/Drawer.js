import React from 'react';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import { CalcStack, ConfigStack } from './StackScreens';

import { MainDrawer } from './menuDrawer/MainDrawer';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator({
       CalcScreen: {
        screen: CalcStack,
        navigationOptions: ({ navigation, screenProps }) => ({
            title: screenProps.t('calculatorScreen:title'),
            drawerIcon: ({tintColor}) => (
                <Icon name='calculator' size={25} color={tintColor}/>
            )
        })
    },
    ConfigScreen: {
        screen: ConfigStack,
        navigationOptions: ({ navigation, screenProps }) => ({
            title: screenProps.t('configScreen:title'),
            drawerIcon: ({tintColor}) => (
                <Icon name='settings' size={25} color={tintColor}/>
            )
        })
    },
    

},
    {
        initialRouteName: 'CalcScreen',
        contentComponent: MainDrawer,
        backgroundColor: colors.backgroundWhite,
        contentOptions: {
            activeTintColor: colors.secondary,
            inactiveTintColor: 'rgba(0,0,0,0.2)',
            
        },
    })

export default Drawer;