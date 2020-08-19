import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';


export default function RenderListItemsMenu({ item }) {

    const navigation = useNavigation();
    // Função de Rota, repassando parâmetros sobre o item selecionado para que a Screen EletricalApplicances possa indentifica a lista de aparelhos
    function navigationGoElectricalAppliances(item) {
        navigation.navigate('ElectricalAppliances',
            {
                idSelection: item.id,
                titleSelection: item.title,
                iconSelection: item.icon
            }
        )
    }

    return (

        <TouchableOpacity style={styles.itemMenu} onPress={() => navigationGoElectricalAppliances(item)}>
            <Image style={styles.iconMenu} source={item.icon} />
            <Text style={styles.txt_titleItemMenu}>{item.title}</Text>

            {/* 
            Verificação: Se nenhum aparelho for selecionado na Screen(EletricalAppliances) de seleção de aparelhos, 
            não é exibido a quantidade(null) de aparelhos selecionados na Screen Home. Utiliza-se a variável global
            para acessar o total de aparelhos que foram selecionados na Screen(EletricalAppliances = Seleção de aparelhos)
            */}
            {
                global.qtdAppliances[item.id] != 0 ? (
                    <View style={styles.numberBox}>
                        <Text > {global.qtdAppliances[item.id]} </Text>
                    </View>)
                    : null
            }

        </TouchableOpacity>
    )
}