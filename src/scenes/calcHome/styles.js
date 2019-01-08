import { StyleSheet } from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
 
    Container:{
        flex:1,
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundWhite,
        
    },
    buttonContainer: {
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.primary,
        elevation: 1,
        padding: metrics.smallMargin,
        alignItems:'center',
        justifyContent: 'space-around',
    },
    
    containerSubTotal:{
        backgroundColor:'white',
        flexDirection: 'row',
        
    },
    flatContainer:{
        flex:1,
        backgroundColor:'white',
        elevation: 1,
        margin: metrics.smallMargin,
    },
    FlatList:{
        backgroundColor: 'white',
        flex:1,
    },  
    headerFlatList: {
        flex:1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        margin: metrics.smallMargin,
    },
    footerFlatList: {
        flex:1,
        flexDirection: 'row',
        borderTopWidth: 1,
        marginTop: metrics.smallMargin
    },
    contentFlatList:{
        flex:1,
        flexDirection: 'row',
        
    },
    text:{
        fontSize: fonts.normal,
        textAlign: 'center',
        fontFamily: 'Open Sans Regular',
    },
    subtotalText:{
      fontSize: fonts.normal,
      textAlign: 'center',
      fontFamily: 'Open Sans Regular',

    },
    contentTextInput:{
        flexDirection: 'row',
        fontFamily: 'Open Sans Regular',
        
    },
    TextInput: {
        textAlign: 'center',
        fontFamily: 'Open Sans Regular',
        backgroundColor:'white',
        marginBottom: metrics.smallMargin,
        elevation: 5,
        fontSize: fonts.normal,
    },
    Button: {
        
    },
});

export default styles;