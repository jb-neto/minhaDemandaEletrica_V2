import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import colors from '../../constants/colors'

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};


const styles = StyleSheet.create({

    // Views

    boxHeader: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: colors.secondary,
        elevation: 5
    },

    // Textos
    txt_titleBox: {
        color: colors.primary,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 35,
        backgroundColor: colors.backgroundAlpha,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },

    txt_subTitleBox: {
        flexGrow: 1,
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    txt_subTitleBox2: {
        color: colors.subTilte,
        fontSize: 12,
        textAlignVertical: 'bottom',
        textAlign: 'center',
    }   
});

export default styles;