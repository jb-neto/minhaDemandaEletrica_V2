import React from 'react';

export default {

lamps : [
  { id: '1', name: 'Fluorescente Compacta 15W',   power: 15,    PF: 0.92,   qtd: 0 },
  { id: '2', name: 'Fluorescente 40W',            power: 40,    PF: 0.92,   qtd: 0 },
  { id: '3', name: 'LED 5W',                      power:  5,    PF: 0.92,   qtd: 0 },
  { id: '4', name: 'LED 10W',                     power: 10,    PF: 0.92,   qtd: 0 },
  { id: '5', name: 'Halógena 60W',                power: 60,    PF: 0.92,   qtd: 0 },
  { id: '6', name: 'Halógena 100W',               power: 100,   PF: 0.92,   qtd: 0 },
  { id: '7', name: 'Incandescente 60W',           power: 60,    PF: 1.00,   qtd: 0 },
  { id: '8', name: 'Vapor de Mercúrio 250W',      power: 250,   PF: 0.92,   qtd: 0 },
  { id: '9', name: 'Vapor de Mercúrio 400W',      power: 400,   PF: 0.92,   qtd: 0 },
],

shower : [
  { id: '1', name: 'Chuveiro 4400W',             power: 4400,     PF: 1.00,   qtd: 0},
  { id: '2', name: 'Chuveiro 5500W',             power: 5500 ,    PF: 1.00,   qtd: 0},
  { id: '3', name: 'Chuveiro 6600W',             power: 6600 ,    PF: 1.00,   qtd: 0},
  { id: '4', name: 'Chuveiro 7500W',             power: 7500 ,    PF: 1.00,   qtd: 0},
],

microWave_Oven : [
  { id: '1', name: 'Forno de microondas pequeno',           power: 750,      PF: 1.00,   qtd: 0 },
  { id: '1', name: 'Forno de microondas médio',             power: 1200,     PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Forno elétrico de embutir',             power: 4500,     PF: 1.00,   qtd: 0 },
  { id: '3', name: 'Micro forno elétrico',                  power: 1000,     PF: 1.00,   qtd: 0 },
  { id: '4', name: 'Grill',                                 power: 1200,     PF: 1.00,   qtd: 0 },
  { id: '5', name: 'Fogão elétrico de 4 bocas',             power: 1500,     PF: 1.00,   qtd: 0 },
  { id: '6', name: 'Fogão elétrico de 6 bocas médio',       power: 2100,     PF: 1.00,   qtd: 0 },
  { id: '7', name: 'Fogão elétrico de 6 bocas grande',      power: 2700,     PF: 1.00,   qtd: 0 },
],

clothesDryer : [
  { id: '1', name: 'Máquina de secar roupas',                 power: 3500,     PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Secador de roupa comercial',              power: 5000,     PF: 1.00,   qtd: 0 },
  { id: '3', name: 'Secador de roupa residencial',            power: 1100,     PF: 1.00,   qtd: 0 },
],

coffeeMachine : [
  { id: '1', name: 'Cafeteira',              power: 1000,     PF: 1.00,   qtd: 0 },
],

washingMachine : [
  { id: '2', name: 'Máquina de lavar roupas',                     power: 1000,     PF: 1.00,   qtd: 0 },
  { id: '3', name: 'Máquina de lavar roupas com aquecimento',     power: 1500,     PF: 1.00,   qtd: 0 },
],

washingMachineDishes : [
  { id: '1', name: 'Máquina de lavar pratos',                   power: 1200,     PF: 0.92,   qtd: 0 },
  { id: '2', name: 'Máquina de lavar louças',                   power: 1500,     PF: 0.92,   qtd: 0 },
],

appliancesKitchen : [
  { id: '1', name: 'Assadeira grande',                         power: 1000,    PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Assadeira pequena',                        power: 500,     PF: 1.00,   qtd: 0 },
  { id: '3', name: 'Batedeira de bolo',                        power: 100,     PF: 0.92,   qtd: 0 },
  { id: '4', name: 'Espremedor de frutas',                     power: 200,     PF: 0.92,   qtd: 0 },
  { id: '5', name: 'Exaustor',                                 power: 150,     PF: 0.92,   qtd: 0 },
  { id: '6', name: 'Fogão comum com acendedor',                power: 90,      PF: 0.92,   qtd: 0 },
  { id: '7', name: 'Freezer vertical Pequeno',                 power: 300,     PF: 0.92,   qtd: 0 },
  { id: '8', name: 'Freezer horizontal médio',                 power: 400,     PF: 0.92,   qtd: 0 },
  { id: '9', name: 'Freezer Horizontal Grande',                power: 500,     PF: 0.92,   qtd: 0 },
  { id: '10', name: 'Geladeira Comum',                         power: 250,     PF: 0.92,   qtd: 0 },
  { id: '11', name: 'Geladeira Duplex',                        power: 300,     PF: 0.92,   qtd: 0 },
  { id: '12', name: 'Liquidificador doméstico',                power: 200,     PF: 0.92,   qtd: 0 },
  { id: '13', name: 'Panela elétrica',                         power: 1200,    PF: 1.00,   qtd: 0 },
  { id: '14', name: 'Sanduicheira',                            power: 640,     PF: 1.00,   qtd: 0 },
],

eletricIron : [
  { id: '1', name: 'Ferro elétrico simples',         power: 500,      PF: 1.00,   qtd: 0  },
  { id: '2', name: 'Ferro elétrico',                 power: 1000,     PF: 1.00,   qtd: 0  },
],

eletricFaucet : [
  { id: '1', name: 'Torneira Elétrica simples',         power: 2000,     PF: 1.00,   qtd: 0  },
  { id: '2', name: 'Torneira Elétrica',                 power: 3500,     PF: 1.00,   qtd: 0  },
],

waterHeater : [
  { id: '1', name: 'Aquecedor de água por acumulação até 80L',             power: 1500,     PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Aquecedor de água por acumulação de 100 a 150L',       power: 2500,     PF: 1.00,   qtd: 0 },
  { id: '3', name: 'Aquecedor de água por acumulação de 200 a 400L',       power: 4000,     PF: 1.00,   qtd: 0 },
  { id: '4', name: 'Aquecedor de água por tampa',                          power: 6000,     PF: 1.00,   qtd: 0 },
],

otherAppliances : [
  { id: '1', name: 'Aquecedor de ambiente',                    power: 1000,     PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Aspirador de pó residencial',              power: 600,      PF: 0.92,   qtd: 0 },  
  { id: '3', name: 'Conjunto de som',                          power: 100,      PF: 0.92,   qtd: 0 },
  { id: '4', name: 'Ebulidor',                                 power: 1000,     PF: 1.00,   qtd: 0 },
  { id: '5', name: 'Enceradeira residencial',                  power: 300,      PF: 0.92,   qtd: 0 },
  { id: '6', name: 'Impressora comum',                         power: 90,       PF: 0.92,   qtd: 0 },
  { id: '7', name: 'Impressora laser',                         power: 900,      PF: 0.92,   qtd: 0 },
  { id: '8', name: 'Máquina para costurar',                    power: 100,      PF: 0.92,   qtd: 0 },
  { id: '9', name: 'Máquina de xerox grande',                  power: 2000,     PF: 0.92,   qtd: 0 },
  { id: '10', name: 'Máquina de xerox pequena',                power: 1500,     PF: 0.92,   qtd: 0 },
  { id: '11', name: 'Micro computador',                        power: 250,      PF: 0.92,   qtd: 0 },
  { id: '12', name: 'Refletor odontológico',                   power: 150,      PF: 0.92,   qtd: 0 },
  { id: '13', name: 'Sauna comercial',                         power: 12000,    PF: 1.00,   qtd: 0 },
  { id: '14', name: 'Sauna residencial',                       power: 4500,     PF: 1.00,   qtd: 0 },
  { id: '15', name: 'Scanner',                                 power: 50,       PF: 0.92,   qtd: 0 },
  { id: '16', name: 'Secador de cabelos grande',               power: 1250,     PF: 1.00,   qtd: 0 },
  { id: '17', name: 'Secador de cabelos pequeno',              power: 700,      PF: 1.00,   qtd: 0 },
  { id: '18', name: 'Televisor colorido',                      power: 200,      PF: 0.92,   qtd: 0 },
  { id: '19', name: 'Televisor preto e branco',                power: 90,       PF: 0.92,   qtd: 0 },
  { id: '20', name: 'Vaporizador',                             power: 300,      PF: 1.00,   qtd: 0 },
  { id: '21', name: 'Ventilador grande',                       power: 250,      PF: 0.92,   qtd: 0 },
  { id: '22', name: 'Ventilador médio',                        power: 200,      PF: 0.92,   qtd: 0 },
  { id: '23', name: 'Ventilador pequeno',                      power: 70,       PF: 0.92,   qtd: 0 },
  { id: '24', name: 'Vídeo game',                              power: 10,       PF: 0.92,   qtd: 0 },
],

airConditioning : [
  { id: '1', name: 'Ar Condicionado 8.500 BTU 127/220V',          power: 1300,     PF: 0.84,   qtd: 0  },
  { id: '2', name: 'Ar Condicionado 10.000 BTU 127/220V',         power: 1400,     PF: 0.84,   qtd: 0  },
  { id: '3', name: 'Ar Condicionado 12.000 BTU 127/220V',         power: 1600,     PF: 0.84,   qtd: 0  },
  { id: '4', name: 'Ar Condicionado 14.000 BTU 220V',             power: 1900,     PF: 0.90,   qtd: 0  },
  { id: '5', name: 'Ar Condicionado 18.000 BTU 220V',             power: 2600,     PF: 0.90,   qtd: 0  },
  { id: '6', name: 'Ar Condicionado 21.000 BTU 220V',             power: 2800,     PF: 0.90,   qtd: 0  },
  { id: '7', name: 'Ar Condicionado 30.000 BTU 220V',             power: 3600,     PF: 0.90,   qtd: 0  },
],

hotTub : [
  { id: '1', name: 'Banheira de hidromassagem com aquecedor',         power: 6000,     PF: 1.00,   qtd: 0  },
],

eletricMotors : [
  { id: '1', name: 'Compressor 10 CV - 3Φ',          power: 9680,     PF: 1.00,   qtd: 0, fases: 3,  motorCV: 10 },
  { id: '2', name: 'Serra de fita 3 CV - 1Φ',        power: 3070,     PF: 1.00,   qtd: 0, fases: 1,  motorCV: 3 },
  { id: '3', name: 'Máquina de Corte 5CV - 1Φ',      power: 4910,     PF: 1.00,   qtd: 0, fases: 1,  motorCV: 5 },
  { id: '4', name: 'Esmeril 1CV - 1Φ',               power: 1100,     PF: 1.00,   qtd: 0, fases: 1,  motorCV: 1 },
  { id: '5', name: 'Furadeira 2CV - 1Φ',             power: 2070,     PF: 1.00,   qtd: 0, fases: 1,  motorCV: 2 },
  { id: '6', name: 'Dobradeira 7,5CV - 3Φ',          power: 6900,     PF: 1.00,   qtd: 0, fases: 3,  motorCV: 7.5 },
],

waterPumps : [
  { id: '1', name: 'Bomba d´água 1/4 CV - 1Φ',       power: 390,     PF: 1.00,   qtd: 0 , fases: 1,  motorCV: 1/4 },
  { id: '2', name: 'Bomba d´água 1/3 CV - 1Φ',       power: 520,     PF: 1.00,   qtd: 0 , fases: 1,  motorCV: 1/3 },
  { id: '3', name: 'Bomba d´água 1/2 CV - 1Φ',       power: 570,     PF: 1.00,   qtd: 0 , fases: 1,  motorCV: 1/2 },
  { id: '4', name: 'Bomba d´água 1 CV - 1Φ',         power: 820,     PF: 1.00,   qtd: 0 , fases: 1,  motorCV: 1 },
],

weldingMachine_Transformer : [
  { id: '1', name: 'Máquina de solda 9KVA - 1Φ',         power: 9000,     PF: 1.00,   qtd: 0  },
  { id: '2', name: 'Máquina de solda 5KVA - 1Φ',         power: 5000,     PF: 1.00,   qtd: 0  },
],

xRay : [
  { id: '1', name: 'Raio X (dentista)',         power: 1090,     PF: 1.00,   qtd: 0 },
  { id: '2', name: 'Raio X (hospital)',         power: 12100,    PF: 1.00,   qtd: 0 },
],

}


