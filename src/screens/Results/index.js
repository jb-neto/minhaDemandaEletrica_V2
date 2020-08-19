import React, { useState } from 'react';

import { View, Text, FlatList, ImageBackground, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../constants/colors';
import styles from './styles';

import dataClientEspecification from '../../constants/dataClientEspecification';

import Calculus from './Calculus/calculus'
import CalculusCustomerClass from './Calculus/calculusCustomerClass'
import BoxResults from '../../components/BoxResults'



export default function Results() {

  // Modals (Selecionar: Sistem de Fases, Unidade Consumidora e place da Unidade Consumidora )
  const [modalVisibleTypeCustomer, setModalVisibleTypeCustomer] = useState(false)
  const [modalVisiblePlaceCustomer, setModalVisiblePlaceCustomer] = useState(false)


  //Resultado dos cáclulos de demanda, carga instalada e classe (Faixa) de consumidor
  var { demandTotal, connectedLoadTotal } = Calculus()
  var {
    customerClass_A,
    customerClass_B,
    customerClass_C,
    customerClass_D,
    customerClass_E,
    customerClass_F } = CalculusCustomerClass()

  // Rotas
  const navigation = useNavigation();

  function navigationGoResumeDemand() {
    navigation.navigate('ResumeDemand')
  }

  function navigationGoMaterialList(customerClass) {
    navigation.navigate('MaterialList', { customerClass })
  }

  // Determinando a classe de consumidor (A, B ou C) de acordo com o sistema de fases selecionado na modal Fases 

  let customerClassArray = [
    customerClass_A,
    customerClass_B,
    customerClass_C,
    customerClass_D,
    customerClass_E,
    customerClass_F]

  for (let i = 0; i < customerClassArray.length; i++) {
    if (dataClientEspecification.placeClientType[i].select) {
      var customerClass = customerClassArray[i]
    }
  }

  function RenderListDesign() {

    /* Lista de elementos e informações que serão exibidas na tela.
    Os valores sao obtidos a partir da variável "customerClass calculada anteriormente" */

    let listInformation = [
      { name: "Quantidade de fios", info: customerClass.qtdWires, unit: '' },
      { name: "Quantidade de fases", info: customerClass.fases, unit: '' },
      { name: "Disjuntor NEMA", info: customerClass.circuitBreakerNEMA, unit: 'A' },
      { name: "Disjuntor DIN", info: customerClass.circuitBreakerDIN, unit: 'A' },
      { name: "Condutor fase/neutro", info: customerClass.conductingWire, unit: 'mm²' },
      { name: "Condutor de aterramento", info: customerClass.groundingWire, unit: 'mm²' },
      { name: "Condutor de proteção", info: customerClass.protectiveWire, unit: 'mm²' },
      { name: "Eletroduto PVC", info: customerClass.conduitPVC, unit: 'mm' },
      { name: "Eletroduto Aço", info: customerClass.conduitSteel, unit: 'mm' },
      { name: "Quantidade de eletrodos", info: customerClass.qtdGroundingElectrode, unit: '' },
    ]

    /*
    Faz a verificação se a demanda calculada é atendedida pela classe de consumidor selecionada 
    Caso atenda, é exibido uma lista com as informações presentes no objeto listInformation
    Caso não atenda, é apresentado uma mensagem de erro para o usuário  
    */

    return (
      customerClass.band ?
        <View style={styles.containerListDesign}>
          {
            listInformation.map(item => (
              <View key={item.name} style={styles.lineListDesign}>
                <Text >{item.name}</Text>
                <Text >{item.info}
                  <Text> {item.unit}</Text>
                </Text>
              </View>
            ))
          }
        </View>
        :
        (<Text style={styles.txt_errorInformation}>
          Demanda não compatível para a configuração de rede. Tente selecionar outro sistema!
          Carga máxima permitida no sistema é de {customerClass.maxLoad} kW.
        </Text>)
    )
  }


  function ModalTypeCustomer() {

    function setModal(index) {
      dataClientEspecification.clientType.map(item => item.select = false),
        dataClientEspecification.clientType[index].select = true,
        setModalVisibleTypeCustomer(!modalVisibleTypeCustomer)
    }

    return (
      <Modal animationType="slide" visible={modalVisibleTypeCustomer} >
        <View >
          <Text style={styles.txt_titleModal}>Categoria da Unidade Consumidora</Text>
          <TouchableOpacity
            style={styles.buttonBackModal}
            onPress={() => { setModalVisibleTypeCustomer(!modalVisibleTypeCustomer) }}
          >
            <Ionicons name="md-arrow-back" size={24} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={dataClientEspecification.clientType}
          keyExtractor={item => item.title}
          renderItem={({ item, index }) =>
            <TouchableOpacity style={styles.listItemsModal} onPress={() => setModal(index)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          }
        />
      </Modal>
    )
  }

  function ModalPlaceCustomer() {

    function setModal(index) {
      dataClientEspecification.placeClientType.map(item => item.select = false),
        dataClientEspecification.placeClientType[index].select = true,
        setModalVisiblePlaceCustomer(!modalVisiblePlaceCustomer)
    }

    return (
      <Modal animationType="slide" visible={modalVisiblePlaceCustomer} >
        <View >
          <Text style={styles.txt_titleModal}>Tipo de Rede</Text>
          <TouchableOpacity
            style={styles.buttonBackModal}
            onPress={() => { setModalVisiblePlaceCustomer(!modalVisiblePlaceCustomer) }}
          >
            <Ionicons name="md-arrow-back" size={24} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={dataClientEspecification.placeClientType}
          keyExtractor={item => item.title}
          renderItem={({ item, index }) =>
            <TouchableOpacity style={styles.listItemsModal} onPress={() => setModal(index)}>
              <Text style={styles.txt_listItemsModal}>{item.title}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          }
        />
      </Modal>
    )
  }

  return (
    <ImageBackground source={require('../../assets/background-01.png')} style={styles.containerBackground}>
      <ScrollView >
        {/* Boxes de exibição dos cálculos efetuados - Carga Instalada - Demanda - Classe de Consumidor */}
        <View style={styles.containerBoxesResults}>

          <BoxResults title='Carga instalada' value={connectedLoadTotal.toFixed(2)} unit='kVA' />
          <BoxResults title='Demanda' value={demandTotal.toFixed(2)} unit='kVA' />
          <BoxResults title='Consumidor' value={customerClass.band} />

        </View>

        {/* Botões das configurações de rede que permitem acesso às modais,tornando-as visíveis quando selecionados 
        É feito um acesso às tabelas presentes em dataClientEspecification para se verificar quais os items se 
        encontram selecionados (select==true) 
        */}
        <View style={styles.boxConfig}>
          <Text style={styles.txt_titleBoxes}>Configurações da rede</Text>
          <View style={styles.containerButtonsConfig}>

            {
              dataClientEspecification.clientType.map((item) => (
                item.select ? (
                  <TouchableOpacity
                    key={item.title}
                    onPress={() => { setModalVisibleTypeCustomer(!modalVisibleTypeCustomer) }}
                    style={styles.buttonConfig}>
                    <FontAwesome name="home" size={24} color={colors.backgroundAlpha} />
                    <Text style={styles.txt_titleItemsBoxConfig}>{item.title} </Text>
                    <FontAwesome name="edit" size={24} color={colors.subTilte} />
                  </TouchableOpacity>)
                  :
                  null)
              )
            }

            {
              dataClientEspecification.placeClientType.map((item) => (
                item.select ? (
                  <TouchableOpacity
                    key={item.title}
                    onPress={() => { setModalVisiblePlaceCustomer(!modalVisiblePlaceCustomer) }}
                    style={styles.buttonConfig}>
                    <FontAwesome name="map-marker" size={24} color={colors.backgroundAlpha} style={{ marginLeft: 6 }} />
                    <Text style={styles.txt_titleItemsBoxConfig}>{item.title}</Text>
                    <FontAwesome name="edit" size={24} color={colors.subTilte} />
                  </TouchableOpacity>)
                  :
                  null)
              )
            }

          </View>
        </View>

        {/* Lista com resultados do dimensionamento */}
        <View style={styles.boxListDesign}>
          <Text style={styles.txt_titleBoxes}>Dimensionamento Tabelas CEMIG ND 5.1 (2020)</Text>
          < RenderListDesign />
        </View>

        {/* Modais de seleção das configurações de rede */}
        <ModalTypeCustomer />
        <ModalPlaceCustomer />

        {/* Botões */}
        <View style={styles.containerButtons}>

          <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoResumeDemand()} >
            <FontAwesome name="check-square-o" size={24} color={colors.primary} />
            <Text style={styles.txt_button}> Resumo</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoMaterialList(customerClass)} >
            <FontAwesome name="list" size={24} color={colors.primary} />
            <Text style={styles.txt_button}> Materiais</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </ImageBackground>
  )
}


