import React from 'react';
import dataTable from '../../../constants/dataTables';
import listAppliances from '../../../constants/dataAppliances';

//Cálculo da demanda de máquinas de Motores elétricos
function DemandMotors() {
  //Tabela com informações de demanda de motores trifásicos e monofásicos
  let tableMotorsMono = dataTable.MotorsMono
  let tableMotorsTri = dataTable.MotorsTri

  // Extraindo coluna com as potências do eixo do Motor
  let eixosMono = tableMotorsMono.map(item => item.motorCV)
  let eixosTri = tableMotorsTri.map(item => item.motorCV)

  //Filtrando apenas motores e bombas selecionados pelo usuário e posteriormente fazendo a soma do total de selecionados
  
  let listMotorsSelected = listAppliances.eletricMotors.filter(motor => motor.qtd != 0)
  let listWaterPumpsSelected = listAppliances.waterPumps.filter(motor => motor.qtd != 0)

  let listMotors_WaterPumps = [...listMotorsSelected,...listWaterPumpsSelected]

  let qtdTotal = listMotors_WaterPumps.map(item => item.qtd).reduce((a, b) => a + b, 0)

  let arrayDemandMotors = []

  // Loop para CADA TIPO(poêencia) de motor selecioando (pode-se ter várias quantidades de um mesmo tipo)
  for (let i = 0; i < listMotors_WaterPumps.length; i++) {

    // Verificação se o motor é monofásico ou trifásico para se determinar qual tabela de demanda usar
    if (listMotors_WaterPumps[i].fases === 1) {
      var j = eixosMono.indexOf(listMotors_WaterPumps[i].motorCV)
      var tableDemand = tableMotorsMono
    } else {
      var j = eixosTri.indexOf(listMotors_WaterPumps[i].motorCV)
      var tableDemand = tableMotorsTri
    }

    // Quantidade de motores que foi selecionada para o TIPO(potência) em questão no loop
    let qtdSelected = listMotors_WaterPumps[i].qtd

    // Montando array com a demanda de cada tipo de motor 
    // Ver tabela de Demanda em função da quantidade total de motores
    switch (qtdTotal) {
      case 1:
        arrayDemandMotors.push(tableDemand[j].one * qtdSelected);
        break;
      case 2:
        arrayDemandMotors.push(tableDemand[j].two * qtdSelected);
        break;
      case 3: case 4: case 5:
        arrayDemandMotors.push(tableDemand[j].three_four_five * qtdSelected);
        break;
      default:
        arrayDemandMotors.push(tableDemand[j].more_five * qtdSelected);
    }
  }

  //somatorio das demandas de cada tipo de motor
  let DemandMotors = arrayDemandMotors.reduce((a, b) => a + b, 0);

  return DemandMotors
}


// ------------------------------------------------------------------------------------


//Cálculo da demanda de máquinas de solda e transformadores
function DemandWeld() {

  //Filtrando apenas as máquinas de solda selecionadas pelo usuário
  let listWeldSelected = listAppliances.weldingMachine_Transformer.filter(weld => weld.qtd != 0)

  // Criando um array com as potências de cada seleção de máquina, pois pode-se ter uma mesma máquina, porém com diversas quantidades
  let powerWeld = []
  for (let i = 0; i < listWeldSelected.length; i++) {
    for (let j = 0; j < listWeldSelected[i].qtd; j++) {
      powerWeld.push(listWeldSelected[i].power)
    }
  }
  // Ordenando em ordem DECRESCENTE (b-a) o array de potências para se poder posteriormente aplicar os fatores de demanda 
  let powerWeldSort = powerWeld.sort((a, b) => b - a)

  // Vetores iniciais dos arrays de Fator de Demanda(FD) e de Demanda
  let FDWeld = []
  let arrayDemandWeld = []

  // loop para o a formação de um array com as demandas de cada máquina
  for (let i = 0; i < powerWeldSort.length; i++) {

    // Fator de demanda (FD) conforme a ordem e a norma 
    FDWeld[i] = 0.3
    FDWeld[0] = 1
    FDWeld[1] = 0.7
    FDWeld[2] = 0.4

    // Demanda = Fator de demanda * potência de cada máquina
    arrayDemandWeld[i] = FDWeld[i] * powerWeldSort[i]
  }

  //somatorio da demanda  
  let demandWeld = arrayDemandWeld.reduce((a, b) => a + b / 1000, 0);

  return demandWeld
}


// ------------------------------------------------------------------------------------




//Cálculo da demanda de máquinas de RaioX
function DemandXRay() {

  //Filtrando apenas as máquinas de RaioX selecionadas pelo usuário
  let listXRaySelected = listAppliances.xRay.filter(weld => weld.qtd != 0)

  // Criando um array com as potências de cada seleção de máquina, pois pode-se ter uma mesma máquina, porém com diversas quantidades
  let powerXRay = []
  for (let i = 0; i < listXRaySelected.length; i++) {
    for (let j = 0; j < listXRaySelected[i].qtd; j++) {
      powerXRay.push(listXRaySelected[i].power)
    }
  }
  // Ordenando em ordem DECRESCENTE (b-a) o array de potências para se poder posteriormente aplicar os fatores de demanda 
  let powerXRaySort = powerXRay.sort((a, b) => b - a)

  // Vetores iniciais dos arrays de Fator de Demanda(FD) e de Demanda
  let FDXRay= []
  let arrayDemandaXRay = []

  // loop para o a formação de um array com as demandas de cada máquina
  for (let i = 0; i < powerXRaySort.length; i++) {
    // Fator de demanda (FD) conforme a ordem e a norma 
    FDXRay[i] = 0.1
    FDXRay[0] = 1

    // Demanda = Fator de demanda * potência de cada máquina
    arrayDemandaXRay[i] = FDXRay[i] * powerXRaySort[i]
  }

  //somatorio da demanda
  let demandXRay = arrayDemandaXRay.reduce((a, b) => a + b / 1000, 0);

  return demandXRay
}

export { DemandMotors, DemandWeld, DemandXRay }
