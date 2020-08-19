import React, { useState, useEffect } from 'react';

import { FlatList, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../constants/colors';
import itemsMenu from './data'; // Contém nome e ícones da lista tela

import RenderListItemsMenu from '../../components/RenderListItemsMenu'


export default function Home() {
     
    /* 
    Força a renderização quando a tela é focada novamente. 
    Isto foi feito para se atualizar a exibição da quantidade de itens selecinados na Screen "HOME" 
    */
    const [, forceUpdate] = useState(0);
    useEffect(() => {
        let unsubscribe = navigation.addListener('focus', () => { forceUpdate(n => !n) });
    }, [navigation]);

    // Rotas de navegação
    const navigation = useNavigation();
    function navigationGoResults() {
        navigation.navigate('Results')
    }

    return (
        <ImageBackground source={require('../../assets/background-01.png')} style={styles.container} >

            {/* Logo */}
            <Image style={styles.logo} source={require('../../assets/logo.png')} />

            {/* Cabeçalho da lista de seleção de aparelhos */}
            <Text style={styles.txt_headerList}>Selecione os aparelhos</Text>

            {/* Lista de aparelhos - Chama a função "RenderListItemsMenu" para renderizar os items da lista*/}
            <FlatList
                data={itemsMenu}
                numColumns={3}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <RenderListItemsMenu item={item} />}
            />

            {/* Botão de calcular - Direciona para a Screen Results */}
            <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoResults()}>
                <SimpleLineIcons name="energy" size={24} color={colors.primary} />
                <Text style={styles.txt_buttonCalculate}> Calcular Demanda !</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}