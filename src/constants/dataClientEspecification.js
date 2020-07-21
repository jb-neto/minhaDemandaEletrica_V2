import React from 'react';

export default {

fases: [
    {
        title: 'Trifásico ',
        volt: '220/127',
        select: true
    },
    {
        title: 'Bifásico',
        volt: '220/127',
        select: false
    },
    {
        title: 'Monofásico',
        volt: '127',
        select: false
    }
],

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
        title: 'Urbano',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V)',
        select: true
    },
    {
        title: 'Rural1',
        description: 'Atendida por rede de distribuição secundária TRIFÁSICA(127/220V)',
        select: false
    },
    {
        title: 'Rural2',
        description: 'Atendida por rede de distribuição primária MONOFÁSICA com transformador EXCLUSIVO',
        select: false
    },
    {
        title: 'Rural3',
        description: 'Atendida por rede de distribuição primária TRIFÁSICA com transformador EXCLUSIVO',
        select: false
    },
],

}
