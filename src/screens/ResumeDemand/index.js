import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from './styles';
import Calculus from '../Results/Calculus/calculus'
import { descriptionDemand } from './data'

export default function ResumeDemand() {

  let { demandTotal, connectedLoadTotal, arrayConnectedLoad, arrayQtdAppliances, arrayDemand, arrayFD } = Calculus()

// Fução de Renderização dos elementos de cada item do cálculo da demanda
  function ItemRender({ title, ind }) {
    return (
      <View style={styles.listItems}>
        <View style={styles.listIdentificator}>
          <Text style={styles.txt_listIdentificator}> {title.id} </Text>
        </View>

        <View style={styles.container}>

          <Text style={styles.txt_titleDescription}>{title.description}</Text>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Quantidade de aparelhos: </Text>
            <Text style={styles.txt_information}>{arrayQtdAppliances[ind]}</Text>
          </View>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Fator de demanda:</Text>
            <Text style={styles.txt_information}>{arrayFD[ind]}</Text>
          </View>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Carga Instalada:</Text>
            <Text style={styles.txt_information}>{arrayConnectedLoad[ind].toFixed(2)} kVA</Text>
          </View>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Demanda: </Text>
            <Text style={styles.txt_information}>{arrayDemand[ind].toFixed(2)} kVA</Text>
          </View>

        </View>
      </View>
    );
  }



  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/background-01.png')} style={{ flex: 1 }}>

        <View style={styles.containerHeader}>

          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.button}> Enviar para e-mail  </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={descriptionDemand}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <ItemRender title={item} ind={index} />}
        />

      </ImageBackground>
    </View>

  );
}

