import React from 'react';
import dataTables from '../../../constants/dataTables';
import dataClientEspecification from '../../../constants/dataClientEspecification';
import { DemandMotors, DemandWeld, DemandXRay } from './demandEspecialCalculus'

export default function Calculus() {

  // Formação de array de acordo com os grupos de aparelhos determindados pela demanda da CEMIG - a, b1, b2, b3, b4, b5, c, d, e, f

  /*   
    caso 0 - a - Iluminação
    caso 1 - b1 - Chuveiros, torneiras e cafeteiras elétricas
    caso 2 - b2 - Aquecedores de água por acumulação e por passagem
    caso 3 - b3 - Fornos, fogões e aparelhos tipo "Grill"
    caso 4 - b4 - Máquinas de lavar e secar roupas, máquinas de lavar louças e ferro elétrico;
    caso 5 - b5 - Demais aparelhos (TV, conjunto de som, ventilador, geladeira etc.)
    caso 6 - c - Aparelhos condicionadores de ar
    caso 7 - d - Motores elétricos
    caso 8 - e - Máquinas de solda e transformador
    caso 9 - f - Aparelhos de raios-X 
  */

  // Array de carga instalada (CI) - a, b1, b2, b3, b4, b5, c, d, e, f
  var arrayConnectedLoad = [
    connectedLoad[0],
    connectedLoad[1] + connectedLoad[3] + connectedLoad[5] +connectedLoad[13] ,
    connectedLoad[10],
    connectedLoad[2],
    connectedLoad[6] + connectedLoad[7] + connectedLoad[8] + connectedLoad[9] ,
    connectedLoad[4] + connectedLoad[11],
    connectedLoad[12],
    connectedLoad[14]+connectedLoad[15],
    connectedLoad[16],
    connectedLoad[17]
  ]
  // Array de quantidade de aparelhos selecionados - a, b1, b2, b3, b4, b5, c, d, e, f
  var arrayQtdAppliances = [
    qtdAppliances[0],
    qtdAppliances[1] + qtdAppliances[3] + qtdAppliances[5] +qtdAppliances[13] ,
    qtdAppliances[10],
    qtdAppliances[2],
    qtdAppliances[6] + qtdAppliances[7] + qtdAppliances[8] + qtdAppliances[9] ,
    qtdAppliances[4] + qtdAppliances[11],
    qtdAppliances[12],
    qtdAppliances[14]+qtdAppliances[15],
    qtdAppliances[16],
    qtdAppliances[17]
  ]
  // Array de quantidade de aparelhos selecionados -  - a, b1, b2, b3, b4, b5, c, d, e, f
  var arrayDemand = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
  // Fator de demanda (FD) - a, b1, b2, b3, b4, b5, c, d, e, f
  var arrayFD = [

  ]

  for (let i = 0; i < arrayConnectedLoad.length; i++) {

    var x
    var y
    var indexLoad

    switch (i) {
      case 0:
        // Variável que vai armazenar a unidade consumidora (clientType) selecionada na Screen
        let [clientType] = dataClientEspecification.clientType.filter(item => item.select === true)

        // Condição para unidade consumidora (clientType) diferente de residencial e SEM intervalo de limite para o fator de Demanda
        if (clientType.title != 'Residencial' && clientType.limitFD_KVA === null) {
          arrayFD[i] = clientType.FD
          arrayDemand[i] = arrayConnectedLoad[i] * arrayFD[i]
        }

        // Condição para unidade consumidora (clientType) diferente de residencial e COM intervalo de limite para o fator de Demanda
        else if (clientType.title != 'Residencial' && clientType.limitFD_KVA != null) {

          // Intervalo limite 1 - Ver tabela da norma
          if (arrayConnectedLoad[i] <= clientType.limitFD_KVA) {
            arrayFD[i] = clientType.FD[0]
            // Demanda = Carga Instalada vezes o fator de demanda correspondente
            arrayDemand[i] = arrayConnectedLoad[i] * arrayFD[i]
          }
          // Intervalo limite 2 - Ver tabela da norma
          else {
            arrayFD[i] = clientType.FD
            // Demanda = Carga Instalada vezes o fator de demanda correspondente até limite 1, depois restante vezes seu fator de demanda
            arrayDemand[i] = clientType.limitFD_KVA * arrayFD[0] + (arrayConnectedLoad[i] - clientType.limitFD_KVA) * arrayFD[1]
          }
        }

        // Condição para unidade consumidora (clientType) Residencial
        else if (clientType.title === 'Residencial') {

          x = dataTables.a // Tabela de Carga Instalada da norma
          y = dataTables.aFD // Tabela de fatores de demanda da norma

          // Encontrando o índice correspondente à carga instalada no array de carga instalada da norma da CEMIG
          indexLoad = x.findIndex(item => item >= arrayConnectedLoad[i]) - 1

          // se o índiceLoad der negativo, usar o primeiro elemento do array de fator de demanda (y)
          indexLoad != -1 ? arrayFD[i] = y[indexLoad] : arrayFD[i] = 1

          // Demanda = Carga Instalada vezes o fator de demanda correspondente
          arrayDemand[i] = arrayConnectedLoad[i] * arrayFD[i]

          // Limite da carga instalada da tabela da norma é 10kVA, acima disso, usar um fator de demanda constante igual a 0,45
          if (arrayConnectedLoad[i] > 10) {
            arrayDemand[i] = arrayConnectedLoad[i] * 0.45
          }
        }
        break;


      case 1: case 2: case 4: case 5: case 6:
        x = dataTables.b // Tabela de Quantidade de aparelhos da norma
        y = dataTables.bFD // Tabela de fatores de demanda da norma

        // Encontrando o índice correspondente à quantidade de aparelhos no array de quantidade de aparelhos da norma da CEMIG
        indexLoad = x.findIndex(item => item >= arrayQtdAppliances[i])

        // Encontrando o fator de Demanda no array com a tabela do fator de demanda
        arrayFD[i] = y[indexLoad]

        // Limite da quantidade de aparelhos da tabela da norma é 61, acima disso, usar um fator de demanda constante igual a 0,33
        if (arrayQtdAppliances[i] > 61) {
          arrayFD[i] = 0.33
        }

        // Demanda = Carga Instalada vezes o fator de demanda correspondente
        arrayDemand[i] = arrayConnectedLoad[i] * arrayFD[i]

        break;


      case 3:
        x = dataTables.b3 // Tabela de Quantidade de aparelhos da norma

        // Tabela de fatores de demanda da norma
        if (arrayConnectedLoad[i] < 3.5) {
          y = dataTables.b3FD_less
        } else {
          y = dataTables.b3FD_more
        }

        // Encontrando o índice correspondente à quantidade de aparelhos no array de quantidade de aparelhos da norma da CEMIG
        indexLoad = x.findIndex(a => a >= arrayQtdAppliances[i])

        // Encontrando o fator de Demanda no array com a tabela do fator de demanda
        arrayFD[i] = y[indexLoad]

        // Limite da quantidade de aparelhos da tabela da norma é 12, acima disso, usar um fator de demanda constante igual:
        // 0,45 para potência abaixo de 3,5kW e 0,34 para maior que 3,5kW
        if (arrayQtdAppliances[i] > 12) {
          arrayConnectedLoad[i] <= 3.5 ? arrayFD[i] = 0.45 : arrayFD[i] = 0.34
        }

        // Demanda = Carga Instalada vezes o fator de demanda correspondente
        arrayDemand[i] = arrayConnectedLoad[i] * arrayFD[i]
        break;

      case 7:
        arrayDemand[i] = DemandMotors()
        arrayFD[i] = 'Tabelado'
        break;


      case 8:
        arrayDemand[i] = DemandWeld()
        arrayFD[i] = 'Tabelado'
        break;


      case 9:
        arrayDemand[i] = DemandXRay()
        arrayFD[i] = 'Tabelado'
        break;
    }
  }


  // Cálculos Finais
  let demandTotal = arrayDemand.reduce((a, b) => a + b, 0)
  let connectedLoadTotal = arrayConnectedLoad.reduce((a, b) => a + b, 0)

  return { demandTotal, connectedLoadTotal, arrayConnectedLoad, arrayQtdAppliances, arrayDemand, arrayFD }
}


