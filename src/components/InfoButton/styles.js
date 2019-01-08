import { StyleSheet } from 'react-native';
import{ metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
    container: {        
        padding: metrics.normalMagin,
        backgroundColor: 'white',
        top: metrics.screenHeight*0.1,
        left: metrics.screenWidth*0.1,
        height: metrics.screenHeight*0.8,
        width: metrics.screenWidth*0.8,
        borderRadius: 5,
    },
    modal:{
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    titleText: {
        borderBottomWidth: 1,
        fontSize: fonts.big,
        textAlign: 'center',
        fontFamily: 'Open Sans Regular',


    },
    containerText: {

    },
    textText: {
        fontFamily: 'Open Sans Regular',
                
    }
});

export default styles;