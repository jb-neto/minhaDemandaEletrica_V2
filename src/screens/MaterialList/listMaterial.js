import React from 'react';

export default function ListMaterial(customerClass) {

let circuitBreakerNEMA = customerClass.circuitBreakerNEMA
let circuitBreakerDIN = customerClass.circuitBreakerDIN
let conductingWire = customerClass.conductingWire
let conduitPVC = customerClass.conduitPVC
let conduitSteel = customerClass.conduitSteel
let groundingWire = customerClass.groundingWire
let qtdGroundingElectrode = customerClass.qtdGroundingElectrode
let protectiveWire = customerClass.protectiveWire
let poleSameSideSteel = customerClass.poleSameSideSteel
let poleSameSideConcrete = customerClass.poleSameSideConcrete
let poleOppositeSideSteel = customerClass.poleOppositeSideSteel
let poleOppositeSideConcrete = customerClass.poleOppositeSideConcrete
let mast = customerClass.mast
let fases = customerClass.fases



/* 
Identifioca se o consumidor é monofásico ou bifásico/trifásico para retornar o tipo de caixa de medição
Caixa CM1 e CM13 - Monofásica
Caixa CM2 e CM14 - Bifásica ou Trifásica 
*/

let Side // Leitura e acesso ao Disjuntor no mesmo lado da caixa
let Outside // Leitura em um lado e acesso ao disjuntor do outro lado da caixa

if (fases === 1) {
    Side = 'CM-1'
    Outside = 'CM-13'

} else {
    Side = 'CM-2'
    Outside = 'CM-14'
}



// Lista de Materiais de todas as opções para padrão de entrada apresentadas no index.js
listOptionsMaterials = {

/* 
- INSTALAÇÃO EM MURO OU MURETA -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS
– LEITURA PELA VIA PÚBLICA
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA
 */

 /* RAMAL INTERNO AÉREO */
option_1: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: '(g)',          qtd: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',         qtd: 'Variável'},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: '(cj)',         qtd: 2},
    { id:4 ,  name: `Caixa para medidor e disjuntor: ${Side}`,                    unid: '(pç)',         qtd: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: '(pç)',         qtd: 2},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',          qtd: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',          qtd: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',         qtd: 'Variável'},
    { id:11 ,  name: 'Curva de 90°',                                              unid: '(pç)',         qtd: 4},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: '(pç)',         qtd: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',         qtd: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: '(pç)',         qtd: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',         qtd: 'Variável'},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',         qtd: 'Variável'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',         qtd: `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `,    unid: '(pç)',      qtd: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: '(pç)',         qtd: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: '(pç)',         qtd: 1},       
],

/* RAMAL INTERNO SUBTERRÂNEO */
option_2: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: '(g)',          qtd: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',         qtd: 1},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: '(cj)',         qtd: 2},
    { id:4 ,  name: `Caixa para medidor e disjuntor: ${Side}`,                    unid: '(pç)',         qtd: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: '(pç)',         qtd: 1},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',          qtd: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',          qtd: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',         qtd: 1},
    { id:11 ,  name: 'Curva de 90°',                                              unid: '(pç)',         qtd: 2},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: '(pç)',         qtd: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',         qtd: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: '(pç)',         qtd: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',         qtd: 1},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',         qtd: '-'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',         qtd:  `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `, unid: '(pç)',     qtd: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: '(pç)',         qtd: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: '(pç)',         qtd: 1},       
],




/*
- INSTALAÇÃO COM PONTALETE -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS 
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/

option_3: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                            unid: '(g)',       qtd: 100},
    { id:2 ,  name: 'Armação secundária de um estribo',                              unid: '(pç)',      qtd: 1},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                      unid: '(cj)',      qtd: 2},
    { id:4 ,  name: `Caixa para medidor e disjuntor: ${Side}`,                       unid: '(pç)',      qtd: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                        unid: '(pç)',      qtd: 1},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,       unid: '(m)',       qtd: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,        unid: '(m)',       qtd: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,        unid: '(m)',       qtd: 'Variável'},
    { id:9 ,  name:  `Condutor cobre nu ${groundingWire}mm²`,                        unid: '(m)',       qtd: 'Variável'},
    { id:10,  name: 'Cinta',                                                         unid: '(pç)',      qtd: 1},
    { id:11,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,            unid: '(pç)',      qtd: 'Variável'},
    { id:12,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`,     unid: '(pç)',      qtd: 'Variável'},
    { id:13,  name: 'Haste Φ 16 x 150 p/ armação secundária',                        unid: '(pç)',      qtd: 1},
    { id:14,  name: 'Haste de aterramento',                                          unid: '(pç)',      qtd: `mín. ${qtdGroundingElectrode }`},
    { id:15,  name: 'Isolador roldana',                                              unid: '(pç)',      qtd: 1},
    { id:16,  name: `Pontalete ${mast}`,                                             unid: '(pç)',      qtd: 1},
    { id:17,  name: 'Tampão (poste de aço)',                                         unid: '(pç)',      qtd: 1},
    { id:18,  name: 'Terminal p/ aterramento caixa',                                 unid: '(pç)',      qtd: 1},
],

/*
- INSTALAÇÃO EM PAREDE -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS 
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/
option_4: [
    { id:1,  name: 'Armação secundária de um estribo',                             unid: '(pç)',        qtd: 1},
    { id:2,  name: 'Buchas e porcas-arruelas',                                     unid: '(cj)',        qtd: 2},
    { id:3,  name: `Caixa para medidor e disjuntor: ${Side}`,                      unid: '(pç)',        qtd: 1},
    { id:4,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,      unid: '(m)',         qtd: 'Variável'},
    { id:5,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,       unid: '(m)',         qtd: 'Variável'},
    { id:6,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,       unid: '(m)',         qtd: 'Variável'},
    { id:7,  name:  `Condutor cobre nu ${groundingWire}mm²`,                       unid: '(m)',         qtd: 'Variável'},
    { id:8,  name: 'Chumbador olhar para ancoragem de escada',                     unid: '(pç)',        qtd: 1},
    { id:9,  name: 'Curva de 45° com bucha',                                       unid: '(pç)',        qtd: 1},
    { id:10, name: 'Curva de 90°',                                                 unid: '(pç)',        qtd: 1},
    { id:11, name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,           unid: '(pç)',        qtd: 'Variável'},
    { id:12, name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`,    unid: '(pç)',        qtd: 'Variável'},
    { id:13, name: 'Haste Φ 16 x 150 p/ armação secundária',                       unid: '(pç)',        qtd: 1},
    { id:14, name: 'Haste de aterramento',                                         unid: '(pç)',        qtd: `mín. ${qtdGroundingElectrode }`},
    { id:15, name: 'Isolador roldana',                                             unid: '(pç)',        qtd: 1},
    { id:16, name: 'Parafuso-chumbador',                                           unid: '(pç)',        qtd: 1},
    { id:17, name: 'Terminal p/ aterramento caixa',                                unid: '(pç)',        qtd: 1},

],

/* 
- INSTALAÇÃO EM MURO OU MURETA -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS -
– LEITURA PELA VIA PÚBLICA -
- CAIXA TIPO CM-13 OU CM-14 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/



/* RAMAL INTERNO AÉREO */

option_5: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: '(g)',          qtd: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',         qtd: 'Variável'},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: '(cj)',         qtd: 2},
    { id:4 ,  name: `Caixa para medidor e disjuntor: ${Outside}`,                 unid: '(pç)',         qtd: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: '(pç)',         qtd: 2},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',          qtd: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',          qtd: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',         qtd: 'Variável'},
    { id:11 ,  name: 'Curva de 90°',                                              unid: '(pç)',         qtd: 4},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: '(pç)',         qtd: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',         qtd: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: '(pç)',         qtd: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',         qtd: 'Variável'},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',         qtd: 'Variável'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',         qtd: `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `,   unid: '(pç)',      qtd: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: '(pç)',         qtd: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: '(pç)',         qtd: 1},       
],


/* RAMAL INTERNO SUBTERRÂNEO */
option_6: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: '(g)',          qtd: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',         qtd: 1},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: '(cj)',         qtd: 1},
    { id:4 ,  name: `Caixa para medidor e disjuntor: ${Outside}`,                 unid: '(pç)',         qtd: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: '(pç)',         qtd: 1},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',          qtd: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',          qtd: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',          qtd: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',         qtd: 1},
    { id:11 ,  name: 'Curva de 90°',                                              unid: '(pç)',         qtd: 2},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: '(pç)',         qtd: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',         qtd: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: '(pç)',         qtd: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',         qtd: 1},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',         qtd: '-'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',         qtd:  `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `,  unid: '(pç)',      qtd: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: '(pç)',         qtd: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: '(pç)',         qtd: 1},       
]

}

return listOptionsMaterials
}
