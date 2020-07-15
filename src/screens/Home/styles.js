import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

import { Dimensions, PixelRatio } from 'react-native';
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
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    logoContainer: {
        marginTop: 10,
        marginBottom: 5
    },

    // Imagens e demais componentes visuais

    logo: {
        width: '100%', 
        height: 130, 
        resizeMode: 'center',
        
        
    },

    iconMenu: {
        width: 50,
        height: 50,
        margin: 5,
        tintColor: colors.white
    },

    itemMenu: {
        flexBasis: 0,
        backgroundColor: colors.blackalpha,
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
        backgroundColor: colors.yellow,
        justifyContent: "center",
        alignItems: "center"   
    },

    line: {
        borderBottomColor: colors.blackalpha,
        borderBottomWidth: 1,
        
    },

    // Textos

    txt_headList: {
        color: 'white', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        backgroundColor: colors.blackalpha, 
        padding: 10, 
        marginBottom:2 
    },

    txt_titleItemMenu: {
        fontSize: 11,
        color: colors.white,
    },

    txt_buttonCalculate: {
        color: colors.yellow,
        fontSize: 16,
        fontWeight: 'bold'
    },

    // Botões

    buttonCalculate: {
        backgroundColor: colors.blackalpha,
        margin: 10,
        padding: 8,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;