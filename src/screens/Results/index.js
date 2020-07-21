import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import dataClientEspecification from '../../constants/dataClientEspecification';
import Calculus from './Calculus/calculus'
import CalculusCustumerClass from './Calculus/calculusCustumerClass'

import { FontAwesome } from '@expo/vector-icons';
import colors from '../../constants/colors';

export default function Results() {

  // Modals (Selecionar: Sistem de Fases, Unidade Consumidora e place da Unidade Consumidora )
  const [modalVisibleFases, setModalVisibleFases] = useState(false)
  const [modalVisibleTypeConsumer, setModalVisibleTypeConsumer] = useState(false)
  const [modalVisiblePlaceConsumer, setModalVisiblePlaceConsumer] = useState(false)

  //Resultado dos cáclulos de demanda, carga instalada e classe (Faixa) de consumidor
  var { demandTotal, connectedLoadTotal } = Calculus()
  var { custumerClass_A, custumerClass_B, custumerClass_C } = CalculusCustumerClass()

  // Rotas
  const navigation = useNavigation();

  function navigationGoResumeDemand() {
    navigation.navigate('ResumeDemand')
  }

  function navigationGoMaterialList(customerClass) {

    navigation.navigate('MaterialList',
      {
        customerClass: customerClass

      }
    )
  }

  // Determinando a classe de consumidor (A, B ou C) de acordo com o sistema de fases selecionado na modal Fases 
  // Trifásico
  if (dataClientEspecification.fases[0].select) {
    var customerClass = custumerClass_C
  }
  // Bifásico
  else if (dataClientEspecification.fases[1].select) {
    var customerClass = custumerClass_B
  }
  // Monofásico
  else if (dataClientEspecification.fases[2].select) {
    var customerClass = custumerClass_A
  }

  // Lista de elementos e informações que serão exibidas na tela
  var listInformation = [
    { name: "Quantidade de fios", info: customerClass.qtdWires, unid: '' },
    { name: "Quantidade de fases", info: customerClass.fases, unid: '' },
    { name: "Disjuntor NEMA", info: customerClass.circuitBreakerNEMA, unid: 'A' },
    { name: "Disjuntor DIN", info: customerClass.circuitBreakerDIN, unid: 'A' },
    { name: "Condutor fase/neutro", info: customerClass.conductingWire, unid: 'mm²' },
    { name: "Condutor de aterramento", info: customerClass.groundingWire, unid: 'mm²' },
    { name: "Condutor de proteção", info: customerClass.protectiveWire, unid: 'mm²' },
    { name: "Eletroduto PVC", info: customerClass.conduitPVC, unid: 'mm' },
    { name: "Eletroduto Aço", info: customerClass.conduitSteel, unid: 'mm' },
    { name: "Quantidade de eletrodos", info: customerClass.qtdGroundingElectrode, unid: '' },
  ]


  return (

    <>
      <ImageBackground source={require('../../assets/background-01.png')} style={{ flex: 1 }}>

        {/* Boxes de exibição dos cálculos efetuados - Carga Instalada - Demanda - Classe de Consumidor */}
        <View style={styles.containerBoxes}>

          <View style={styles.boxHeader}>
            <Text style={styles.txt_titleBox}>Carga instalada</Text>
            <Text style={styles.txt_subTitleBox}>{connectedLoadTotal.toFixed(2)}</Text>
            <Text style={styles.txt_subTitleBox2}>kVA</Text>
          </View>

          <View style={styles.boxHeader}>
            <Text style={styles.txt_titleBox}>Demanda</Text>
            <Text style={styles.txt_subTitleBox}>{demandTotal.toFixed(2)}</Text>
            <Text style={styles.txt_subTitleBox2}>kVA</Text>
          </View>

          <View style={styles.boxHeader}>
            <Text style={styles.txt_titleBox}>Consumidor</Text>
            <Text style={styles.txt_subTitleBox}> {customerClass.band} </Text>
          </View>

        </View>


        {/* Botões das configurações de rede que permitem acesso às modais,tornando-as visíveis quando selecionados 
        É feito um acesso às tabelas presentes em dataClientEspecification para se verificar quais os items se encontram selecionados (select==true) 
        */}
        <View style={styles.boxConfig}>
          <Text style={styles.txt_titleBoxConfig}>Configurações da rede</Text>

          <View style={styles.containerButtons}>

            <TouchableOpacity onPress={() => { setModalVisibleFases(!modalVisibleFases) }}>
              {dataClientEspecification.fases.map((item) => (
                item.select ? <Text key={item.title} style={styles.buttonConfig} >{item.title}</Text> : null))
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setModalVisibleTypeConsumer(!modalVisibleTypeConsumer) }}>
              {dataClientEspecification.clientType.map((item) => (
                item.select ? <Text key={item.title} style={styles.buttonConfig} >{item.title.substring(0, 10).concat('...')} </Text> : null))
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setModalVisiblePlaceConsumer(!modalVisiblePlaceConsumer) }}>
              {dataClientEspecification.placeClientType.map((item) => (
                item.select ? <Text key={item.title} style={styles.buttonConfig} >{item.title}</Text> : null))
              }
            </TouchableOpacity>

          </View>

          {/*
           Faz a verificação se a demanda calculada é atendedida pela classe de consumidor selecionada 
          Caso atenda, é exibido uma lista com as informações presentes no objeto listInformation
          Caso não atenda, é apresentado uma mensagem de erro para o usuário  
          */}
          {customerClass.band ?
            <ScrollView>
              <View style={{ padding: 10 }}>
                {listInformation.map(item => (
                  <View key={item.name} style={styles.line}>
                    <Text >{item.name}</Text>
                    <Text >{item.info}<Text> {item.unid}</Text></Text>
                  </View>))}
              </View>
            </ScrollView> :
            <Text style={{ textAlign: 'center', textAlignVertical: 'center', padding: 20, fontSize: 18, color: 'red' }}>
              Carga máxima permitida no sistema é de {customerClass.maxLoad} kW. Demanda não compatível para a configuração de rede. Tente selecionar outro sistema de fases!
              </Text>}

        </View>


        {/* Modais de seleção das configurações de rede */}

        <Modal animationType="slide" visible={modalVisibleFases}>

          <View >
            <Text style={styles.txt_titleModal}> Ramal de entrada</Text>
          </View>

          <FlatList
            data={dataClientEspecification.fases}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) =>
              <TouchableOpacity style={styles.listItemsModal}
                onPress={() => {
                  dataClientEspecification.fases.map(item => item.select = false),
                    dataClientEspecification.fases[index].select = true,
                    setModalVisibleFases(!modalVisibleFases)
                }
                }>
                <Text style={styles.txt_listItemsModal}>{item.title}</Text>
                <Text>{item.volt} V</Text>
              </TouchableOpacity>}

          />
        </Modal>

        <Modal animationType="slide" visible={modalVisibleTypeConsumer} >

          <View >
            <Text style={styles.txt_titleModal}>Tipo de customerClass</Text>
          </View>

          <FlatList
            data={dataClientEspecification.clientType}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) =>
              <TouchableOpacity style={styles.listItemsModal}
                onPress={() => {
                  dataClientEspecification.clientType.map(item => item.select = false),
                    dataClientEspecification.clientType[index].select = true,
                    setModalVisibleTypeConsumer(!modalVisibleTypeConsumer)
                }
                }>
                <Text style={styles.txt_listItemsModal}>{item.title}</Text>
              </TouchableOpacity>
            }

          />
        </Modal>

        <Modal animationType="slide" visible={modalVisiblePlaceConsumer} >

          <View >
            <Text style={styles.txt_titleModal}>Tipo de customerClass</Text>
          </View>

          <FlatList
            data={dataClientEspecification.placeClientType}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                style={styles.listItemsModal}
                onPress={() => {
                  dataClientEspecification.placeClientType.map(item => item.select = false),
                    dataClientEspecification.placeClientType[index].select = true,
                    setModalVisiblePlaceConsumer(!modalVisiblePlaceConsumer)
                }
                }>
                <Text style={styles.txt_listItemsModal}>{item.title}</Text>
                <Text>{item.description}</Text>
              </TouchableOpacity>}

          />
        </Modal>


        <View style={styles.containerButtons2}>

          <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoResumeDemand()} >
            <FontAwesome name="check-square-o" size={24} color={colors.yellow} />
              <Text style={styles.txt_button}> Resumo</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonCalculate} onPress={() => navigationGoMaterialList(customerClass)} >
              <FontAwesome name="list" size={24} color={colors.yellow} />
              <Text style={styles.txt_button}> Materiais</Text>
          </TouchableOpacity>

        </View>





      </ImageBackground>



    </>


  )
}


