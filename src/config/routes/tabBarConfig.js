import {createMaterialTopTabNavigator} from 'react-navigation'
import {Filament, Printer, Finishes, Administrative} from '../../scenes/configurations';

import {colors} from '../../styles';

export default tabBarConfig = createMaterialTopTabNavigator({
    FilamentScreen: {
        screen: Filament
    },
    PrinterScreen: {
        screen: Printer
    },
    FinishesScreen: {
        screen: Finishes,
    },
    AdministrativeScreen: {
        screen: Administrative
    }
},
{
    initialRouteName: 'AdministrativeScreen',
    swipeEnabled: true, 
    animationEnabled: true,
    tabBarOptions:{
        scrollEnabled: true,
        tabStyle:{
            backgroundColor: colors.primaryD,
            borderBottomColor: colors.secondary,
            borderBottomWidth: 2
        },
    }
})

