import React, { useState, useEffect } from 'react';

import { View, FlatList, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import itemsMenu from './data'; // Contém nome e ícones da lista tela


export default function Home() {
    // Forçar renderização dos elementos quando chamada
    const [, forceUpdate] = useState(0);

    /* s
    Força a renderização quando a tela é focada novamente. 
    Isto foi feito para se atualizar a exibição da quantidade de itens selecinados na Screen "HOME"
    */
    useEffect(() => {
        let unsubscribe = navigation.addListener('focus', () => { forceUpdate(n => !n) });
    }, [navigation]);

    // Rotas de navegação
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

    function navigationGoResults() {
        navigation.navigate('Results')
    }

    // Função de Renderização da lista de dos itens do Menu principal (Lâmpadas, chuveiros, fornos...)
    function RenderListItemsMenu({ item }) {
        return (

            <TouchableOpacity style={styles.itemMenu} onPress={() => navigationGoElectricalAppliances(item)}>
                <Image style={styles.iconMenu} source={item.icon} />
                <Text style={styles.txt_titleItemMenu}>{item.title}</Text>

                {/* 
                Verificação: Se nenhum aparelho for selecionado na Screen(EletricalAppliances) de seleção de aparelhos, 
                não é exibido a quantidade(null) de aparelhos selecionados na Screen Home. Utiliza-se a variável global
                para acessar o total de aparelhos que foram selecionados na Screen(EletricalAppliances = Seleção de aparelhos)
                */}
                {global.qtdAppliances[item.id] != 0 ?
                    <View style={styles.numberBox}>
                        <Text > {global.qtdAppliances[item.id]} </Text>
                    </View> : null}

            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>

            <ImageBackground style={styles.container} source={require('../../assets/background-01.png')} >

                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>

                {/* Cabeçalho da lista de seleção de aparelhos */}
                <Text style={styles.txt_headList}>Selecione os aparelhos </Text>

                {/* Lista de aparelhos - Chama a função "RenderListItemsMenu" para renderizar os items da lista*/}
                <FlatList
                    data={itemsMenu}
                    numColumns={3}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <RenderListItemsMenu item={item} />}
                />

                {/* Linha de borda no final da lista de aparelhos */}
                <View style={styles.line}></View>

                {/* Botão de calcular - Direciona para a Screen Results */}
                <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoResults()}>
                    <Text style={styles.txt_buttonCalculate}> Calcular Demanda ! </Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    );
}