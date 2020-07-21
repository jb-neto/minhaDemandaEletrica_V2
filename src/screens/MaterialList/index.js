import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Modal } from 'react-native';

import styles from './styles';
import ListMaterial from './listMaterial'
import listOptionsOfLocalMeter from '../../constants/dataListLocalMeter'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
/*
Lista de Opções de Instalação do padrão de entrada - Lista de Material em função de cada uma

Opção 1: Instalação em muro ou mureta - CM1 ou CM2 - Aéreo 
Opção 2: Instalação em muro ou mureta - CM1 ou CM2 - Subterrâneo
Opção 3: Instalação com pontalete - CM1 ou CM2
Opção 4: Instalação em parede - CM1 ou CM2
Opção 5: Instalação em muro ou mureta - CM13 ou CM14 - Aéreo 
Opção 6: Instalação em muro ou mureta - CM13 ou CM14 - Subterrâneo
*/


export default function ResumeDemand({ route }) {

  // Modal para seleção das opções de Instalação do padrão de entrada
  const [modalVisible, setModalVisible] = useState(false)

  // Retorna o consumidor calculado na screen anterior (Obtido pela rota)
  let { customerClass } = route.params;

  /* Desestrurando - Função retorna as listas de materiais de cada opção de instalação, porém já personalizadas de
  acordo com a classe de consumidor */
  let { option_1, option_2, option_3, option_4, option_5, option_6 } = ListMaterial(customerClass)

  // Criando um array a lsita de materiais de todas as opções de instalação do padrão de entrada
  let allListMaterials = [option_1, option_2, option_3, option_4, option_5, option_6]

  // Percorre o array com as opções do padrão de entrada e filtra aquele em que a opção "SELECT" é "true"
  // A opção "SELECT" permite saber qual opção foi selecionada na tela de modal implementada mais abaixo.
  let [optionSelected] = listOptionsOfLocalMeter.optionsMeterLocalSocket.filter(item => item.select)

  /*  Sabendo-se a opção de padrão de entrada selecionada, pode-se obter o seu "ID", para a partir disso,
   retornar a lista de materiais referente a essa opção */
  let idSelectedOption = optionSelected.id
  let listMaterialOfOptionSelected = allListMaterials[idSelectedOption]


  // Função para renderizar os itens da lista de Material da opção do padrão de entrada selecionado
  function ItemRender({ item }) {
    return (
      <View style={styles.listItems}>

        {/* Identificador do item da lista (1,2,3,4,5....)*/}
        <View style={styles.listIdentificator}>
          <Text style={styles.txt_listIdentificator}> {item.id} </Text>
        </View>

        {/* Título de descrição de cada item da lista*/}
        <View style={styles.container}>

          <Text style={styles.txt_titleDescription}>{item.name}</Text>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Quantidade: </Text>
            <Text style={styles.txt_information}>{item.qtd} {item.unid}</Text>
          </View>

        </View>
      </View>
    );
  }


  // Função para renderizar os itens da lista de opções do padrão de entrada na tela de Modal
  function ItemRenderModal({ item, index }) {
    return (
      <TouchableOpacity
        style={styles.listItemsModal}
        onPress={() => {
          listOptionsOfLocalMeter.optionsMeterLocalSocket.map(item => item.select = false),
            listOptionsOfLocalMeter.optionsMeterLocalSocket[index].select = true,
            setModalVisible(!modalVisible)
        }
        }>
        <Text style={styles.txt_listItemsModal}>{item.title} </Text>
        <Text style={styles.txt_information}>{item.local} </Text>
        <Text style={styles.txt_information}>{item.ramalLigacao} </Text>
        <Text style={styles.txt_information}>{item.instalacao} </Text>
        <Text style={styles.txt_information}>{item.caixa} </Text>
        <Text style={styles.txt_information}>{item.saidaInterna} </Text>
      </TouchableOpacity>
    );
  }



  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/background-01.png')} style={{ flex: 1 }}>

        {/* Botão de enviar lista de materiais para e-mail */}
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => { }}>
            <View style={styles.button} >
              <MaterialCommunityIcons name="email" size={24} color={colors.yellow} />
              <Text style={styles.txt_button}>  Enviar para e-mail </Text>
            </View>
          </TouchableOpacity>
        </View>


        {/* Cabeçalho com informações da opção de padrão de entrada escolhido*/}
        <View style={styles.listItemsEspecification}>

          <View style={styles.container}>

            <View style={styles.boxConfig}>
              <Text style={styles.txt_titleBoxConfig}>Selecione o tipo de padrão de entrada</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', padding:12}}>

              <View style={styles.containerInformationEspecification}>
                <Text style={styles.txt_titleDescription}>{optionSelected.title}</Text>
                <Text style={styles.txt_information}>{optionSelected.local} </Text>
                <Text style={styles.txt_information}>{optionSelected.ramalLigacao} </Text>
                <Text style={styles.txt_information}>{optionSelected.instalacao} </Text>
                <Text style={styles.txt_information}>{optionSelected.caixa} </Text>
                <Text style={styles.txt_information}>{optionSelected.saidaInterna} </Text>
              </View>


              <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                <Text style={styles.button}><MaterialCommunityIcons name="format-list-numbered" size={32} color={colors.yellow}/></Text>
                <Text style={styles.txt_information}>Ver opções</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>


        {/*  Chama a fundção ItemRender para renderizar cada item da lista de material */}
        <FlatList
          data={listMaterialOfOptionSelected}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ItemRender item={item} />}
        />


        {/*  Tela Modal para seleção da opção de padrão de entrada */}
        <Modal animationType="slide" visible={modalVisible} >

          <View >
            <Text style={styles.txt_titleModal}>Especificações</Text>
          </View>

          <FlatList
            data={listOptionsOfLocalMeter.optionsMeterLocalSocket}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => <ItemRenderModal item={item} index={index} />}
          />

        </Modal>



      </ImageBackground>
    </View>

  );
}

