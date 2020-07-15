import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({

    // Containers

    container: {
        flex: 1,
        alignItems: 'stretch',
    },

    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },

    containerInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    // Views

    listItems: {
        padding: 12,
        borderBottomWidth: 1,
        height: 130,
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
        marginBottom: 5
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
        borderWidth: 0,
        color: colors.yellow,
        textAlign: 'center',
        fontWeight: 'bold',
    },

});

export default styles;