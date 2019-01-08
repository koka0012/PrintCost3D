import { StyleSheet } from 'react-native';
import {metrics, fonts} from '../../styles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: -metrics.smallMargin,
        padding: metrics.normalMagin,
        
    },
    oneContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:metrics.smallMargin
    },  
    twoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subContainer:{
        backgroundColor:'white',
        elevation: 1,
        marginTop: metrics.smallMargin,
        padding: metrics.smallMargin,
    },  
    text: {
        fontSize: fonts.normal,
        marginBottom: metrics.normalMagin,
        fontFamily: 'Open Sans Regular',
    },
    picker: {
        height: 50,
        width: 200,        
    },
    smallPicker: {
        height: 50,
        width: 100,
        
    },
    inputText: {
        fontFamily: 'Open Sans Regular',
        borderWidth: 1,
        borderRadius: 5,
        padding: metrics.smallMargin
    }
});

export default styles;