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

    // Containers

    containerBoxes: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    containerButtons: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    // Views

    boxHeader: {
        flex: 1,
        margin: 8,
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 5
    },

    boxConfig: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 9,
    },


    // Textos
    txt_titleBox: {
        color: colors.yellow,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 35,
        backgroundColor: colors.blackalpha,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },

    txt_subTitleBox: {
        flexGrow: 1,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    txt_subTitleBox2: {
        color: 'gray',
        fontSize: 12,
        textAlignVertical: 'bottom',
        textAlign: 'center',
    },


    txt_titleBoxConfig: {
        color: colors.yellow,
        fontSize: 12,
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.blackalpha,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    // Linhas
    line: {
        justifyContent: 'space-between',
        padding: 2,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.lighter,
    },

    // Botões

    buttonConfig: {
        color: colors.yellow,
        width: widthPercentageToDP(26),
        height: 35,
        fontSize: 12,
        backgroundColor: colors.blackalpha,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 5,
        borderRadius: 10,
    },

    button: {
        color: colors.yellow,
        width: widthPercentageToDP(40),
        height: 35,
        fontSize: 12,
        backgroundColor: colors.blackalpha,
        margin: 10,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
    },


    // Modals

    listItemsModal: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
    },

    txt_titleModal: {
        backgroundColor: colors.blackalpha,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        padding: 15,
        textAlign: 'center',
    },

    txt_listItemsModal: {
        fontSize: 16,
        fontWeight: 'bold'
    },


});

export default styles;