import { Alert } from 'react-native';

const verifyPremium = () => {
    alert('entrou');
}

export const SaveConfig = (navigation, screenProps) => {
    Alert.alert(screenProps.t('components:btn:save'), screenProps.t('components:btn:configSave'));
    navigation.navigate('CalcScreen',{});
}