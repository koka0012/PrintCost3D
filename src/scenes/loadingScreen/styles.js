import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    text:{
        fontFamily: 'Open Sans Regular',
        fontSize: fonts.biggest,
    }
});

export default styles;