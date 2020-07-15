import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Modal } from 'react-native';
import styles from './styles';

import listMaterial from './listMaterial'

export default function ResumeDemand({ route }) {

  const [modalVisible, setModalVisible] = useState(false)

  var { customerClass } = route.params;

  var { material_1 } = listMaterial(customerClass)

  var especification = [
    {
      id: 1,
      title: 'Instalação em muro/mureta - CM-1 ou CM-2',
      local: 'Instalação em muro ou mureta',
      ramalLigacao: 'Ramal de ligação aéreo',
      ligacao: 'Ligação a 1,2,3 e 4 fios',
      leitura: 'Leitura pela via pública',
      caixa: 'Caixa de medição CM-1 ou CM-2',
      instalacao: 'Instalação direta',

      select: true
    },
    {
      id: 2,
      title: 'Instalação com pontalete - CM-1 ou CM-2',
      local: 'Instalação com pontalete',
      ramalLigacao: 'Ramal de ligação aéreo',
      ligacao: 'Ligação a 1,2,3 e 4 fios',
      leitura: '-',
      caixa: 'Caixa de medição CM-1 ou CM-2',
      instalacao: 'Instalação direta',

      select: false
    },
    {
      id: 3,
      title: 'Instalação em parede - CM-1 ou CM-2',
      local: 'Instalação em parede',
      ramalLigacao: 'Ramal de ligação aéreo',
      ligacao: 'Ligação a 1,2,3 e 4 fios',
      leitura: '-',
      caixa: 'Caixa de medição CM-1 ou CM-2',
      instalacao: 'Instalação direta',

      select: false
    },
    {
      id: 4,
      title: 'Instalação em muro/mureta - CM-13 ou CM-14',
      local: 'Instalação em muro ou mureta',
      ramalLigacao: 'Ramal de ligação aéreo',
      ligacao: 'Ligação a 1,2,3 e 4 fios',
      leitura: 'Leitura pela via pública',
      caixa: 'Caixa de medição CM-13 ou CM-14',
      instalacao: 'Instalação direta',

      select: false
    }
  ]



  var optionSelected = especification[0]

  function ItemRender({ item }) {
    return (
      <View style={styles.listItems}>
        <View style={styles.listIdentificator}>
          <Text style={styles.txt_listIdentificator}> {item.id} </Text>
        </View>

        <View style={styles.container}>

          <Text style={styles.txt_titleDescription}>{item.name}</Text>

          <View style={styles.containerInformation}>
            <Text style={styles.txt_information}>Quantidade: </Text>
            <Text style={styles.txt_information}>{item.qtdA} {item.unid}</Text>
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

        <View style={styles.listItemsEspecification}>

          <View style={styles.container}>

            <Text style={styles.txt_titleDescription}>Especificações</Text>

            <View style={styles.containerInformationEspecification}>
              <Text style={styles.txt_information}>{optionSelected.local} </Text>
              <Text style={styles.txt_information}>{optionSelected.ramalLigacao} </Text>
              <Text style={styles.txt_information}>{optionSelected.ligacao} </Text>
              <Text style={styles.txt_information}>{optionSelected.leitura} </Text>
              <Text style={styles.txt_information}>{optionSelected.caixa} </Text>
              <Text style={styles.txt_information}>{optionSelected.instalacao} </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
            <Text style={styles.button}> Mudar  </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={material_1}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ItemRender item={item} customerClass={customerClass} />}
        />


        <Modal animationType="slide" visible={modalVisible} >

          <View >
            <Text style={styles.txt_titleModal}>Especificações</Text>
          </View>

          <FlatList
            data={especification}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                style={styles.listItemsModal}
                onPress={() => {
                    especification.map(item => item.select = false),
                    especification[index].select = true,
                    setModalVisible(!modalVisible)
                }
                }>
                <Text style={styles.txt_listItemsModal}>{item.title} </Text>
                <Text style={styles.txt_information}>{item.local} </Text>
                <Text style={styles.txt_information}>{item.ramalLigacao} </Text>
                <Text style={styles.txt_information}>{item.ligacao} </Text>
                <Text style={styles.txt_information}>{item.leitura} </Text>
                <Text style={styles.txt_information}>{item.caixa} </Text>
                <Text style={styles.txt_information}>{item.instalacao} </Text>
              </TouchableOpacity>
            }
          />
        </Modal>

      </ImageBackground>
    </View>

  );
}

