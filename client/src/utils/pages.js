import React from 'react';

import {
  FaHome,
  FaListAlt,
  FaUsers,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaSmileWink
} from 'react-icons/fa';

import { Home, Preparing, PriceList, Stuff, About, Contact } from 'pages/';

const defaultPage = {
  showHeader: true,
  hide: false
};

export default [
  {
    ...defaultPage,
    path: '/',
    title: 'Rönt-clinic',
    description: 'Pracownia RTG',
    content: <Home />,
    icon: FaHome,
    showHeader: false
  },
  {
    ...defaultPage,
    title: 'Przygotowania',
    description: 'Jak się przygotować do badań',
    path: '/preparing',
    icon: FaListAlt,
    content: <Preparing />,
    showHeader: true
  },
  // {
  //   ...defaultPage,
  //   title: "Pracownicy",
  //   description: "Informacje o naszych specialistach",
  //   path: "/stuff",
  //   icon: FaUsers,
  //   content: Stuff,
  //   showHeader: true
  // },
  {
    ...defaultPage,
    title: 'Cennik',
    description: 'Usługi które oferujemy',
    path: '/priceList',
    icon: FaMoneyBillWave,
    content: <PriceList />,
    showHeader: true
  },
  {
    ...defaultPage,
    title: 'O nas',
    description: 'Dowiedz się o nas i o naszym sprzęcie',
    path: '/about',
    icon: FaSmileWink,
    content: <About />,
    showHeader: true
  },
  {
    ...defaultPage,
    title: 'Kontakt',
    description: 'Gdzie i jak nas znaleźć',
    path: '/contact',
    icon: FaMapMarkerAlt,
    content: <Contact />,
    showHeader: true
  }
];
