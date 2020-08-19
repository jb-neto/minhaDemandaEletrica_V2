import { StyleSheet } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';

import colors from '../../constants/colors'

// Função que retorna as dimensões da tela
const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};



const styles = StyleSheet.create({

    iconMenu: {
        width: 50,
        height: 50,
        margin: 5,
        tintColor: colors.secondary
    },

    itemMenu: {
        flexBasis: 0,
        backgroundColor: colors.backgroundAlpha,
        flexGrow: 1,
        padding: 10,
        height: heightPercentageToDP('18%'),
        marginVertical: 1,
        marginHorizontal: 1,
    },

    numberBox: {
        position: 'absolute',
        width: 25,
        height: 25,
        borderRadius: 15,
        top: "5%",
        left: "90%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center"   
    },

    // Textos

    txt_titleItemMenu: {
        fontSize: 11,
        color: colors.secondary,
    },

});

export default styles;