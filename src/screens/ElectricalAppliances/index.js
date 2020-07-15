import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SectionList, Image, ImageBackground } from 'react-native';

import styles from './styles';
import listAppliances from '../../constants/dataAppliances'; // Contém Objetos com a lista de todos os aparelhos eletrodoméstios separado por grupos

// Array com a Quantidade de aparelhos selecioandos de cada conjunto de aparelhos do menu inicial em HOME
global.qtdAppliances = Array(18).fill(0)

// Array com a carga instalada de cada conjunto de aparelhos do menu inicial em HOME
global.connectedLoad = Array(18).fill(0)

export default function ElectricalAppliances({ route }) {

  // ParÂmetros de identificação da rota
  var { idSelection, titleSelection, iconSelection } = route.params;

  // Objeto com os aparelhos eletrodomésticos
  const [electricalAppliance, setElectricalAppliance] = useState([])

  // Forçar Render dos elementos
  const [, forceUpdate] = useState(0);

  /*
   Carrega Objeto contendo informações dos aparelhos eletricos
   Para isso, é feita uma verificação dequal o id selecionado na Screen Home. Esta informação é repassada pela Rota.
   */
  useEffect(() => {
    switch (idSelection) {
      case 0:
        setElectricalAppliance(listAppliances.lamps)
        break
      case 1:
        setElectricalAppliance(listAppliances.shower)
        break
      case 2:
        setElectricalAppliance(listAppliances.microWave_Oven)
        break
      case 3:
        setElectricalAppliance(listAppliances.coffeeMachine)
        break
      case 4:
        setElectricalAppliance(listAppliances.appliancesKitchen)
        break
      case 5:
        setElectricalAppliance(listAppliances.eletricFaucet)
        break
      case 6:
        setElectricalAppliance(listAppliances.eletricIron)
        break
      case 7:
        setElectricalAppliance(listAppliances.washingMachine)
        break
      case 8:
        setElectricalAppliance(listAppliances.clothesDryer)
        break
      case 9:
        setElectricalAppliance(listAppliances.washingMachineDishes)
        break
      case 10:
        setElectricalAppliance(listAppliances.waterHeater)
        break
      case 11:
        setElectricalAppliance(listAppliances.otherAppliances)
        break
      case 12:
        setElectricalAppliance(listAppliances.airConditioning)
        break
      case 13:
        setElectricalAppliance(listAppliances.hotTub)
        break
      case 14:
        setElectricalAppliance(listAppliances.waterPumps)
        break
      case 15:
        setElectricalAppliance(listAppliances.eletricMotors)
        break
      case 16:
        setElectricalAppliance(listAppliances.weldingMachine_Transformer)
        break
      case 17:
        setElectricalAppliance(listAppliances.xRay)
        break
    }
  }, [idSelection])

  // ------------------------------------------------------------------------------------
  // Adicionar, Subtração e Reset de itens selecionados

  function AddApplience(index) {
    electricalAppliance[index].qtd++
    forceUpdate(n => !n);
  }

  function SubAppliance(index) {
    if (electricalAppliance[index].qtd != 0) {
      electricalAppliance[index].qtd--
    };
    forceUpdate(n => !n);
  }

  function ResetAppliance() {
    electricalAppliance.forEach(item => item.qtd = 0);
    forceUpdate(n => !n);
  }

  // ------------------------------------------------------------------------------------
  // Renderiza os itens das listas - aparelhos
  function RenderListItems({ item, index }) {

    return (
      <View style={styles.itemsList}>

        {/* Texto descritivo dos item e potência */}
        <View style={{ flex: 1 }}>
          <Text style={styles.txt_titleItem}>{item.name}</Text>
          <Text style={styles.txt_subTitleItem}>Potência: {item.power} W</Text>
        </View>

        <View style={styles.containerButtonsAddSub}>

          {/* Botão de diminuir - É feito uma verificação: ele somente aparecerá se houver pelo menos um item selecioando*/}
          {item.qtd != 0 ?
            <TouchableOpacity onPress={() => SubAppliance(index)}>
              <Text style={styles.buttonAddSub}> - </Text>
            </TouchableOpacity>
            : null
          }

          {/* Texto indicador de quantidade de electricalAppliance - É feito uma verificação: ele somente aparecerá se houver pelo menos um item selecioando */}
          {item.qtd != 0 ?
            <Text style={styles.txt_qtdItems}> {item.qtd} </Text>
            : null
          }

          {/* Botão de somar */}
          <TouchableOpacity onPress={() => AddApplience(index)}>
            <Text style={styles.buttonAddSub}> + </Text>
          </TouchableOpacity>
        </View>

      </View>

    )
  }


  // Somando a quantidade de aparelhos que foram selecionados e atribuindo para a respectiva posição(index) no vetor global
  let sumAppliances = electricalAppliance.reduce((a, b) => a + b.qtd, 0);
  qtdAppliances[idSelection] = sumAppliances;

  /* 
  Somando a carga instalada dos aparelhos que foram selecionados e atribuindo para a respectiva posição(index) no vetor global
  Dividir por 1000 para transformar de W para kW
  */
  let sumConnectedLoad = electricalAppliance.reduce((a, b) => a + (b.qtd * b.power / b.PF / 1000), 0);
  connectedLoad[idSelection] = sumConnectedLoad;


  return (

    <>
      <ImageBackground source={require('../../assets/background-01.png')} style={{}}>

        {/* Cabeçalho com ícone e botões */}
        <View style={styles.containerHeader}>
          <Image source={iconSelection} style={styles.selectedIcon} />

          <View>
            <Text style={styles.txt_totalSelectedItems}> Selecionados: {sumAppliances} </Text>

            <TouchableOpacity onPress={() => ResetAppliance()}>
              <Text style={styles.buttonClear}>Limpar</Text>
            </TouchableOpacity>
          
          </View>

        </View>

      </ImageBackground>



      {/* 
      Lista dos aparelhos do grupo selecionado.
      Utiliza a função "RenderListItems" para renderizar os aparelhos
      */}
      <SectionList
        sections={[{ title: titleSelection, data: electricalAppliance }]}
        keyExtractor={item => item.name}
        renderSectionHeader={({ section }) => <Text style={styles.txt_titleList}> {section.title} </Text>}
        renderItem={({ item, index }) => <RenderListItems item={item} index={index} />}
      />

    </>
  );
}

