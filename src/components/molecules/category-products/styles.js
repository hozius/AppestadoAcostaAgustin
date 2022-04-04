import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../constants/themes'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 4
    },
    touchable: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: colors.textColor
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        color: colors.textColor
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28,
        color: '#000000'
    },
    image: {
        width: 120,
        height: 120,
    },
})