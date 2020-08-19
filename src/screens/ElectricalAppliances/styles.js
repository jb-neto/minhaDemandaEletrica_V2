import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};



const styles = StyleSheet.create({

    //Containers

    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    containerButtonsAddSub: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    //Views

    selectedIcon: {
        width: 80,
        height: 80,
        margin: 15,
        tintColor: colors.backgroundAlpha
    },

    itemsList: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderList,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //Textos

    txt_totalSelectedItems: {
        padding: 8,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: colors.secondary,
        elevation: 8
    },

    txt_titleList: {
        fontSize: 18,
        backgroundColor: colors.backgroundAlpha,
        color: colors.primary,
        padding: 12,

    },

    txt_titleItem: {
        fontSize: 16,
    },

    txt_subTitleItem: {
        fontSize: 12,
        color: colors.subTilte
    },

    txt_qtdItems: {
        fontSize: 18,
        width: 45,
        textAlign: 'center',
        color: colors.subTilte
    },

    // Botões

    buttonClear: {
        backgroundColor: colors.backgroundAlpha,
        padding: 8,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        color: colors.primary,
        textAlign: 'center',
        fontWeight:'bold'
    },


    buttonAddSub: {
        fontSize: 18,
        color: colors.primary,
        width: 25,
        height: 25,
        backgroundColor: colors.backgroundAlpha,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center'
    },
});

export default styles;