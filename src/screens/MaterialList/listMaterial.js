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
var poleSameSideSteel = customerClass.poleSameSideSteel
let poleSameSideConcrete = customerClass.poleSameSideConcrete
var poleOppositeSideSteel = customerClass.poleOppositeSideSteel
let poleOppositeSideConcrete = customerClass.poleOppositeSideConcrete
let mast = customerClass.mast

listMaterial = {

/* 
- INSTALAÇÃO EM MURO OU MURETA -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS
– LEITURA PELA VIA PÚBLICA
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA
 */
material_1: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: 'g',        qtdA: 500,          qtdB: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: 'cj',       qtdA: 2,            qtdB: 2},
    { id:4 ,  name: 'Caixa para medidor e disjuntor - CM-1 ou CM-2',              unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: 'pç',       qtdA: 2,            qtdB: 1},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:11 ,  name: 'Curva de 90°',                                              unid: 'pç',       qtdA: 4,            qtdB: 2},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',     qtdA: 'Variável',   qtdB: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',     qtdA: 'Variável',   qtdB: '-'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',     qtdA: `mín. ${qtdGroundingElectrode }`,     qtdB:  `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `,                                                      unid: 'pç',      qtdA: 1,       qtdB: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: 'pç',       qtdA: 1,            qtdB: 1},       
],

/*
- INSTALAÇÃO COM PONTALETE -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS 
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/

material_2: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                            unid: 'g',       qtdA: 100,         qtdB: null},
    { id:2 ,  name: 'Armação secundária de um estribo',                              unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                      unid: 'cj',      qtdA: 2,           qtdB: null},
    { id:4 ,  name: 'Caixa para medidor e disjuntor - CM-1 ou CM-2',                 unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                        unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,       unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,        unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,        unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:9 ,  name:  `Condutor cobre nu ${groundingWire}mm²`,                        unid: 'm',       qtdA: 'Variável',  qtdB: null},
    { id:10,  name: 'Cinta',                                                         unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:11,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,            unid: 'pç',      qtdA: 'Variável',  qtdB: null},
    { id:12,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`,     unid: 'pç',      qtdA: 'Variável',  qtdB: null},
    { id:13,  name: 'Haste Φ 16 x 150 p/ armação secundária',                        unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:14,  name: 'Haste de aterramento',                                          unid: 'pç',      qtdA: `mín. ${qtdGroundingElectrode }`,     qtdB: null},
    { id:15,  name: 'Isolador roldana',                                              unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:16,  name: `Pontalete ${mast}`,                                             unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:17,  name: 'Tampão (poste de aço)',                                         unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:18,  name: 'Terminal p/ aterramento caixa',                                 unid: 'pç',      qtdA: 1,           qtdB: null},
],

/*
- INSTALAÇÃO EM PAREDE -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS 
- CAIXA TIPO CM-1 OU CM-2 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/
material_3: [
    { id:1,  name: 'Armação secundária de um estribo',                             unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:2,  name: 'Buchas e porcas-arruelas',                                     unid: 'cj',      qtdA: 2,           qtdB: null},
    { id:3,  name: 'Caixa para medidor e disjuntor - CM-1 ou CM-2',                unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:4,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,      unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:5,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,       unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:6,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,       unid: '(m)',     qtdA: 'Variável',  qtdB: null},
    { id:7,  name:  `Condutor cobre nu ${groundingWire}mm²`,                       unid: 'm',       qtdA: 'Variável',  qtdB: null},
    { id:8,  name: 'Chumbador olhar para ancoragem de escada',                     unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:9,  name: 'Curva de 45° com bucha',                                       unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:10, name: 'Curva de 90°',                                                 unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:11, name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,           unid: 'pç',      qtdA: 'Variável',  qtdB: null},
    { id:12, name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`,    unid: 'pç',      qtdA: 'Variável',  qtdB: null},
    { id:13, name: 'Haste Φ 16 x 150 p/ armação secundária',                       unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:14, name: 'Haste de aterramento',                                         unid: 'pç',      qtdA: `mín. ${qtdGroundingElectrode }`,     qtdB: null},
    { id:15, name: 'Isolador roldana',                                             unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:16, name: 'Parafuso-chumbador',                                           unid: 'pç',      qtdA: 1,           qtdB: null},
    { id:17, name: 'Terminal p/ aterramento caixa',                                unid: 'pç',      qtdA: 1,           qtdB: null},

],

/* 
- INSTALAÇÃO EM MURO OU MURETA -

- PADRÃO COM RAMAL DE LIGAÇÃO AÉREO 
- LIGAÇÃO A 2, 3 e 4 FIOS -
– LEITURA PELA VIA PÚBLICA -
- CAIXA TIPO CM-13 OU CM-14 
– MEDIÇÃO COM INSTALAÇÃO DIRETA 
*/

material_4: [
    { id:1 ,  name: 'Arame de aço galvanizado n° 12 BWG',                         unid: 'g',        qtdA: 500,          qtdB: 500},
    { id:2 ,  name: 'Armação secundária de um estribo',                           unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:3 ,  name: 'Buchas e porcas-arruelas',                                   unid: 'cj',       qtdA: 2,            qtdB: 1},
    { id:4 ,  name: 'Caixa para medidor e disjuntor - CM-13 ou CM-14',            unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:5 ,  name: 'Cabeçote ou curva 135°',                                     unid: 'pç',       qtdA: 2,            qtdB: 1},
    { id:6 ,  name: `Condutor de cobre isolado (Neutro) ${conductingWire}mm²`,    unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:7 ,  name: `Condutor de cobre isolado (Fases) ${conductingWire}mm²`,     unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:8 ,  name: `Condutor de cobre isolado (Terra) ${protectiveWire}mm²`,     unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:9 ,  name: `Condutor cobre nu ${groundingWire}mm²`,                      unid: '(m)',      qtdA: 'Variável',   qtdB: 'Variável'},
    { id:10 ,  name: 'Cinta',                                                     unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:11 ,  name: 'Curva de 90°',                                              unid: 'pç',       qtdA: 4,            qtdB: 2},
    { id:12 ,  name: `Disjuntor termomagnético DIN ${circuitBreakerDIN}A`,        unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:13 ,  name: `Eletroduto PVC Φ${conduitPVC}mm ou Aço Φ${conduitSteel}mm`, unid: '(pç)',     qtdA: 'Variável',   qtdB: 'Variável'},
    { id:14 ,  name: 'Isolador roldana',                                          unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:15 ,  name: 'Haste Φ 16 x 150 p/ armação secundária',                    unid: '(pç)',     qtdA: 'Variável',   qtdB: 1},
    { id:16 ,  name: 'Haste Φ 16 x 350 p/ armação secundária',                    unid: '(pç)',     qtdA: 'Variável',   qtdB: '-'},
    { id:17 ,  name: 'Haste de aterramento',                                      unid: '(pç)',     qtdA: `mín. ${qtdGroundingElectrode }`,     qtdB:  `mín. ${qtdGroundingElectrode }`},
    { id:18 ,  name: `Poste ${poleSameSideSteel}, ${poleOppositeSideSteel}, ${poleSameSideConcrete}, ${poleOppositeSideConcrete} `,                                                      unid: 'pç',      qtdA: 1,       qtdB: 1},
    { id:19 ,  name: `Tampão (poste de aço)  `,                                   unid: 'pç',       qtdA: 1,            qtdB: 1},
    { id:20 ,  name: 'Terminal p/ aterramento caixa',                             unid: 'pç',       qtdA: 1,            qtdB: 1},       
],



}
return listMaterial
}
