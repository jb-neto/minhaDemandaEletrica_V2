import React from 'react';

export default {

clientType: [
    {
        title: 'Residencial',
        select: true,
        FD: null,
        limitFD_KVA: null
    },
    {
        title: 'Oficinas, indústrias e semelhantes',
        select: false,
        FD: [1, 0.8],
        limitFD_KVA: 20
    },
    {
        title: 'Hoteis e semelhantes',
        select: false,
        FD: [0.5, 0.4],
        limitFD_KVA: 20
    },
    {
        title: 'Auditórios, cinemas e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Bancos e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Barbearia, salões de beleza e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Clubes e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Escolas e semelhantes',
        select: false,
        FD: [1, 0.5],
        limitFD_KVA: 12
    },
    {
        title: 'Escritórios, lojas e salas comerciais',
        select: false,
        FD: [1, 0.7],
        limitFD_KVA: 20
    },
    {
        title: 'Garagens comerciais e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Clínicas, hospitais e semelhantes',
        select: false,
        FD: [0.4, 0.2],
        limitFD_KVA: 50
    },
    {
        title: 'Igrejas, templos e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Restaurantes, bares e semelhantes',
        select: false,
        FD: 1,
        limitFD_KVA: null
    },
    {
        title: 'Áreas comuns e condomínios',
        select: false,
        FD: [1, 0.25],
        limitFD_KVA: 10
    },
    {
        title: 'Salão de festas',
        select: false,
        FD: 1,
        limitFD_KVA: null
    }
],


placeClientType: [
    {
        title: 'Urbano ou Rural - Monofásico',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V) com ligação a 2 fios',
        select: false
    },

    {
        title: 'Urbano ou Rural - Bifásico',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V) com ligação a 3 fios',
        select: false
    },

    {
        title: 'Urbano ou Rural - Trifásico - com demanda menor que 75kVA',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V) com ligação a 4 Fios',
        select: true
    },
    {
        title: 'Rural - Monofásica',
        description: 'Atendida por rede de distribuição primária MONOFÁSICA com transformador EXCLUSIVO',
        select: false
    },
    {
        title: 'Rural - Trifásica',
        description: 'Atendida por rede de distribuição primária TRIFÁSICA com transformador EXCLUSIVO',
        select: false
    },
    {
        title: 'Urbana ou Rural - Trifásica - com demanda de 75kVA a 304 kVA',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V) com demanda de 75kVA a 304 kVA',
        select: false
    },
],

}
