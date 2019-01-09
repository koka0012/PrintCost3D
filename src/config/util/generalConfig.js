import { Alert } from 'react-native';

export const SaveConfig = (navigation, screenProps) => {
    Alert.alert(screenProps.t('components:btn:save'), screenProps.t('components:btn:configSave'));
    navigation.navigate('CalcScreen',{});
}