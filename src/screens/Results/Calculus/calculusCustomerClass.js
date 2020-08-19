import React from 'react';
import customerClass from '../../../constants/dataCustomerClass';
import Calculus from './calculus'

export default function CalculusConsumerClass() {

  /* Fundação faz o cálculo para descobrir a faixa(band) de consumidor no qual a demanda ou carga instalada
  se enaixa, respeitando para isso, as condicionais de limites de cargas da tabela da norma da CEMIG.
  - Para os consimidores classes A e B é considerada a carga Instalada (connectedLoadTotal)
  - Para os demais é considerado a demanda elétrica total (demandTotal) 
  Caso nao haja consumidor/cliente(customer) dentro da classe em questão, é retornado um vetor nulo, porém com informações
  adicionais sobre a carga máxima permitida para a classe*/

  var { demandTotal, connectedLoadTotal } = Calculus()

  const customerClassTable_A = customerClass.customerA
  const customerClassTable_B = customerClass.customerB
  const customerClassTable_C = customerClass.customerC
  const customerClassTable_D = customerClass.customerD
  const customerClassTable_E = customerClass.customerE
  const customerClassTable_F = customerClass.customerF
  const customerClass_Null = customerClass.customerNull

  // Classe A
  if (connectedLoadTotal <= 10) {
    let maxLoad_A = customerClassTable_A.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_A.length; i++) {
      if (connectedLoadTotal < maxLoad_A[i]) {
        var customerClass_A = customerClassTable_A[i]
        break
      }
    }
  } else {
    var customerClass_A = []
    customerClass_A.maxLoad = 10
  }


  // Classe B
  if (connectedLoadTotal <= 15) {
    let maxLoad_B = customerClassTable_B.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_B.length; i++) {
      if (connectedLoadTotal < maxLoad_B[i]) {
        var customerClass_B = customerClassTable_B[i]
        break
      }
    }
  } else {
    var customerClass_B = []
    customerClass_B.maxLoad = 15
  }


  // Classe C
  if (demandTotal <= 75) {
    let maxLoad_C = customerClassTable_C.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_C.length; i++) {
      if (demandTotal < maxLoad_C[i]) {
        var customerClass_C = customerClassTable_C[i]
        break
      }
    }
  } else {
    var customerClass_C = []
    customerClass_C.maxLoad = 75
  }

  // Classe D
  if (demandTotal <= 50) {
    let maxLoad_D = customerClassTable_D.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_D.length; i++) {
      if (demandTotal < maxLoad_D[i]) {
        var customerClass_D = customerClassTable_D[i]
        break
      }
    }
  } else {
    var customerClass_D = []
    customerClass_D.maxLoad = 50
  }


  // Classe E
  if (demandTotal <= 75) {
    let maxLoad_E = customerClassTable_E.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_E.length; i++) {
      if (demandTotal < maxLoad_E[i]) {
        var customerClass_E = customerClassTable_E[i]
        break
      }
    }
  } else {
    var customerClass_E = []
    customerClass_E.maxLoad = 75
  }


  // Classe F
  if (demandTotal <= 304) {
    let maxLoad_F = customerClassTable_F.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_F.length; i++) {
      if (demandTotal < maxLoad_F[i]) {
        var customerClass_F = customerClassTable_F[i]
        break
      }
    }
  } else {
    var customerClass_F = []
    customerClass_F.maxLoad = 304
  }
  
 
  return { customerClass_A, customerClass_B, customerClass_C, customerClass_D, customerClass_E, customerClass_F, customerClass_Null }
}


