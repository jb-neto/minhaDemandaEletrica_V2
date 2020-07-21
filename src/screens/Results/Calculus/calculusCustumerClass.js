import React from 'react';
import custumerClass from '../../../constants/dataCustumerClass';
import Calculus from './calculus'

export default function CalculusConsumerClass() {

  var { demandTotal, connectedLoadTotal } = Calculus()

  const custumerClassTable_A = custumerClass.customerA
  const custumerClassTable_B = custumerClass.customerB
  const custumerClassTable_C = custumerClass.customerC


  if (connectedLoadTotal <= 10) {
    let maxLoad_A = custumerClassTable_A.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_A.length; i++) {
      if (connectedLoadTotal < maxLoad_A[i]) {
        var custumerClass_A = custumerClassTable_A[i]
        break
      }
    }
  }
  else {
    var custumerClass_A = []
    custumerClass_A.band = null
    custumerClass_A.maxLoad = 10
  }

  if (connectedLoadTotal <= 15) {
    let maxLoad_B = custumerClassTable_B.map(item => item.maxLoad)
    for (let i = 0; i < maxLoad_B.length; i++) {
      if (connectedLoadTotal < maxLoad_B[i]) {
        var custumerClass_B = custumerClassTable_B[i]
        break
      }
    }
  }
  else {
    var custumerClass_B = []
    custumerClass_B.band = null
    custumerClass_B.maxLoad = 15
  }


  let maxLoad_C = custumerClassTable_C.map(item => item.maxLoad)
  for (let i = 0; i < maxLoad_C.length; i++) {
    if (demandTotal < maxLoad_C[i]) {
      var custumerClass_C = custumerClassTable_C[i]
      break
    }
  }

  return { custumerClass_A, custumerClass_B, custumerClass_C }
}


