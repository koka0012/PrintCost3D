import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: metrics.smallMargin,
        backgroundColor: 'white'
    },
    containerTop: {
        flex: 1,
        borderBottomWidth: 1,
        padding: metrics.smallMargin,
        marginBottom: metrics.normal
    },
    containerSubTop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',

    },
    containerMiddle: {
        flex: 3,
    },
    containerContentMiddle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        borderBottomWidth: 1,
        padding: metrics.smallMargin,
        marginBottom: metrics.normalMagin
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        padding: metrics.smallMargin
    },
    textTitle: {
        fontSize: fonts.normal,
        textAlign: 'center',
        fontFamily: 'Open Sans Regular',

    },
    textCost: {
        fontSize: fonts.normal,
        paddingVertical: metrics.smallMargin,
        fontWeight: 'bold',
        fontFamily: 'Open Sans Regular',
    },
    textText: {
        fontSize: fonts.normal,
        paddingVertical: metrics.smallMargin,
        fontFamily: 'Open Sans Regular',

    },
});

export default styles