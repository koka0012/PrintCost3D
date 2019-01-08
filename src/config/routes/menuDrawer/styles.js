import { StyleSheet } from 'react-native';

import {colors, fonts} from '../../../styles';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.backgroundWhite,
    },
    topContainer: {
        height: 75,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleContainer: {
        flex:1,
        justifyContent: 'space-between',
    },
    footer: {
        alignContent:'center'
    },  
    userIcon: {
        backgroundColor: 'white',
        borderRadius: 50,
        width:80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderWidth: 5,
        overflow: 'hidden',
        borderColor: colors.primary1
    },
    image: {
       width: 70,
       height: 70,
    },
    text:{
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Open Sans Regular',

    },
    textItems:{
        
    }, 
    footerText: {
        fontSize: fonts.normal,
        textAlign: 'center',
        fontFamily: 'Open Sans Regular',
    }
});

export default styles;