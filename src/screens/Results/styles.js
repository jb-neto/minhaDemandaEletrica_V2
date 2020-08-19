import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({

    // Containers
    containerBackground: {
        flex:1
    },

    containerBoxesResults: {
        flexDirection: 'row',
    },

    containerButtonsConfig: {
        padding: 10,
    },

    containerListDesign: {
        padding: 10,
        marginBottom: 15
    },

    containerButtons: {
        flexDirection: 'row',
        padding: 8,
    },

    // Views

    boxConfig: {
        margin: 15,
        borderRadius: 10,
        elevation: 9,
        
        backgroundColor: colors.secondary,
    },

    boxListDesign: {
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 9,
        
        backgroundColor: colors.secondary,
    },

    // Textos

    txt_titleBoxes: {
        fontSize: 12,
        height: 35,
        
        textAlign: 'center',
        textAlignVertical: 'center',
        
        color: colors.primary,
        backgroundColor: colors.backgroundAlpha,
        
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    txt_titleItemsBoxConfig: {
        flex: 1,
        marginLeft: 15
    },

    // Linhas

    lineListDesign: {
        flexDirection: 'row',
        padding: 6,
        
        justifyContent: 'space-between',
        
        borderBottomWidth: 1,
        borderBottomColor: colors.borderList,
    },

    // Botões

    buttonConfig: {
        flexDirection: 'row',

        alignItems: 'center',

        marginVertical:5,
    },


    txt_button: {
        fontWeight: 'bold',

        color: colors.primary,
    },

    txt_errorInformation: {
        fontSize: 16,
        padding: 20,
        
        textAlign: 'center',
        textAlignVertical: 'center',
                
        color: 'red'
    },


    // Modals

    listItemsModal: {
        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: colors.borderList,
    },

    txt_titleModal: {
        fontSize: 16,
        padding: 16,
        fontWeight: 'bold',
        
        textAlign: 'center',
        
        color: colors.secondary,
        backgroundColor: colors.backgroundAlpha,
    },

    txt_listItemsModal: {
        fontWeight: 'bold'
    },

    buttonBackModal: {
        padding: 16,
        position: 'absolute',
    },

    buttonCalculate: {
        flex:1,
        flexDirection: 'row',
        
        margin: 10,
        padding: 8,
        fontWeight: 'bold',
        borderRadius: 10,
        
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
        backgroundColor: colors.backgroundAlpha,
    },

});

export default styles;