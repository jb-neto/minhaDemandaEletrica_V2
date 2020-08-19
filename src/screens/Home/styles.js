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

    //Container

    container: {
        flex: 1,
    },

    // Imagens e demais componentes visuais

    logo: {
        width: '100%', 
        height: 130, 
        resizeMode: 'center',
        marginTop: -5,
        marginBottom: 5
    },

    // Textos

    txt_headerList: {
        color: 'white', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        backgroundColor: colors.backgroundAlpha, 
        padding: 10, 
        marginBottom:2 
    },

    txt_buttonCalculate: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Botões

    buttonCalculate: {
        flexDirection:'row',
        backgroundColor: colors.backgroundAlpha,
        margin: 10,
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;