import React from 'react';

export default {

customerA: [
    {
    band: 'A1', 
    minLoad:0, maxLoad: 5, 
    qtdWires:2, 
    fases: 1, 
    circuitBreakerNEMA:40, circuitBreakerDIN: 40, 
    conductingWire: 6, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 1, 
    protectiveWire: 6, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'A2', 
    minLoad:5, maxLoad: 6.5, 
    qtdWires:2, 
    fases: 1, 
    circuitBreakerNEMA:50, circuitBreakerDIN: 50, 
    conductingWire: 10, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 1, 
    protectiveWire: 10, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'A3', 
    minLoad:6.5, maxLoad: 10, 
    qtdWires:2, 
    fases: 1, 
    circuitBreakerNEMA:70, circuitBreakerDIN: 63, 
    conductingWire: 16, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 1, 
    protectiveWire: 16, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'},

],

customerB: [  
    
    {
    band: 'B1', 
    minLoad: 0, maxLoad: 10, 
    qtdWires:3, 
    fases: 2, 
    circuitBreakerNEMA:40, circuitBreakerDIN: 40, 
    conductingWire: 10, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 1, 
    protectiveWire: 10, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'B2', 
    minLoad: 10, maxLoad: 15, 
    qtdWires:3, 
    fases: 2, 
    circuitBreakerNEMA:60, circuitBreakerDIN: 63, 
    conductingWire: 16, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 1, 
    protectiveWire: 16, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

],

customerC: [    
    {
    band: 'C1', 
    minLoad:0, maxLoad: 15, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:40, circuitBreakerDIN: 40, 
    conductingWire: 10, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 2, 
    protectiveWire: 10, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'C2', 
    minLoad:0, maxLoad: 23, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:60, circuitBreakerDIN: 63, 
    conductingWire: 16, 
    conduitPVC:32, conduitSteel:25, 
    groundingWire: 10, 
    qtdGroundingElectrode: 2,
    protectiveWire: 16, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'C3', 
    minLoad:23, maxLoad: 27, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:70, circuitBreakerDIN: 80, 
    conductingWire: 25, 
    conduitPVC:40, conduitSteel:32, 
    groundingWire: 10, 
    qtdGroundingElectrode: 2,
    protectiveWire: 16, 
    poleSameSideSteel: 'PA1',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA4', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'C4', 
    minLoad:27, maxLoad: 38, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:100, circuitBreakerDIN: 100, 
    conductingWire: 35, 
    conduitPVC:40, conduitSteel:32, 
    groundingWire: 10, 
    qtdGroundingElectrode: 2,
    protectiveWire: 16, 
    poleSameSideSteel: 'PA2',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA5', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'C5', 
    minLoad:38, maxLoad: 47, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:120, circuitBreakerDIN: 125, 
    conductingWire: 50, 
    conduitPVC:50, conduitSteel:40, 
    groundingWire: 10, 
    qtdGroundingElectrode: 2,
    protectiveWire: 25, 
    poleSameSideSteel: 'PA2',
    poleSameSideConcrete: 'PC1', 
    poleOppositeSideSteel: 'PA5', 
    poleOppositeSideConcrete:'PC2', 
    mast:'PT1'
    },

    {
    band: 'C6', 
    minLoad:47, maxLoad: 57, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:150, circuitBreakerDIN: 150, 
    conductingWire: 70, 
    conduitPVC:60, conduitSteel:50, 
    groundingWire: 10, 
    qtdGroundingElectrode: 3,
    protectiveWire: 35, 
    poleSameSideSteel: 'PA3',
    poleSameSideConcrete: 'PC3', 
    poleOppositeSideSteel: 'PA6', 
    poleOppositeSideConcrete:'PC3', 
    mast:'PT2'
    },

    {
    band: 'C7', 
    minLoad:57, maxLoad: 66, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:175, circuitBreakerDIN: 175, 
    conductingWire: 95, 
    conduitPVC:75, conduitSteel:65, 
    groundingWire: 10, 
    qtdGroundingElectrode: 3,
    protectiveWire: 35, 
    poleSameSideSteel: 'PA3',
    poleSameSideConcrete: 'PC3', 
    poleOppositeSideSteel: 'PA6', 
    poleOppositeSideConcrete:'PC3', 
    mast:'PT2'
    },
    
    {
    band: 'C8', 
    minLoad:66, maxLoad: 75, 
    qtdWires:4, 
    fases: 3, 
    circuitBreakerNEMA:200, circuitBreakerDIN: 200, 
    conductingWire: 95, 
    conduitPVC:75, conduitSteel:65, 
    groundingWire: 10, 
    qtdGroundingElectrode: 3,
    protectiveWire: 35, 
    poleSameSideSteel: 'PA3',
    poleSameSideConcrete: 'PC3', 
    poleOppositeSideSteel: 'PA6', 
    poleOppositeSideConcrete:'PC3', 
    mast:'PT2'
    },

],

}
