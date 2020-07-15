import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({

    // Containers

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },

    containerInformationEspecification: {
        justifyContent: 'space-between'
    },

    containerInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    // Views

    listItemsEspecification: {
        padding: 12,
        borderBottomWidth: 1,
        height: 140,
        borderBottomColor: colors.lightgray,
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 10,
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    listItems: {
        padding: 12,
        borderBottomWidth: 1,
        height: 80,
        borderBottomColor: colors.lightgray,
        flexDirection: 'row',
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 10,
        elevation: 8
    },

    listIdentificator: {
        backgroundColor: colors.blackalpha,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },


    // Textos

    txt_listIdentificator: {
        color: colors.yellow,
        fontSize: 18
    },

    txt_titleDescription: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: 10,
        marginBottom: 0
    },

    txt_information: {
        marginHorizontal: 10,
        fontSize: 12,
        color: colors.blacklight
    },

    //Botões

    button: {
        backgroundColor: colors.blackalpha,
        padding: 8,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        color: colors.yellow,
        textAlign: 'center',
        fontWeight: 'bold',
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