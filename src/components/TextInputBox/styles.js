import { StyleSheet } from 'react-native';

import {colors, fonts, metrics} from '../../styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 1,
        marginTop: metrics.smallMargin,
        padding: metrics.smallMargin,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: metrics.smallMargin
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: metrics.smallMargin
    },
    text: {
        fontSize: fonts.normal,
        fontFamily: 'Open Sans Regular',
    }
});

export default styles;