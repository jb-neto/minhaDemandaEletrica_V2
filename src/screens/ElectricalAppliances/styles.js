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

    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },

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
        tintColor: colors.blackalpha
    },

    itemsList: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
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
        borderWidth: 0,
        textAlign: 'center',
        backgroundColor: colors.white,
        elevation: 8
    },

    txt_titleList: {
        fontSize: 18,
        backgroundColor: colors.blackalpha,
        color: colors.yellow,
        padding: 10,

    },

    txt_titleItem: {
        fontSize: 16,

    },

    txt_subTitleItem: {
        fontSize: 12,
        color: colors.blacklight
    },

    txt_qtdItems: {
        fontSize: 20,
        width: 40,
        textAlign: 'center',
        color: colors.blacklight
    },

    // Botões

    buttonClear: {
        backgroundColor: colors.blackalpha,
        padding: 8,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 0,
        color: colors.yellow,
        textAlign: 'center',
    },


    buttonAddSub: {
        fontSize: 18,
        color: colors.yellow,
        width: 25,
        height: 25,
        backgroundColor: colors.blackalpha,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center'
    },
});

export default styles;