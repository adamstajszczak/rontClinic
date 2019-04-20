import React from 'react';

import { Subpages } from 'subpages/';

import skull from '../images/icons/skull.png';
import backbone from '../images/icons/spine.png';
import chest from '../images/icons/chest.png';
import joints from '../images/icons/joints.png';
import legs from '../images/icons/legs.png';

const defaultPage = {
  showHeader: true,
  hide: false
};

export default [
  {
    ...defaultPage,
    title: 'Czaszka i żuchwa',
    description: 'Umów się na prześwietlenie czaszki',
    path: '/uslugi/czaszka',
    icon: skull,
    content: <Subpages groupId="1" />,
    showHeader: true,
    hide: true
  },
  {
    ...defaultPage,
    title: 'Kręgosłup',
    description: 'Umów się na prześwietlenie kręgosłupa',
    path: '/uslugi/kregoslup',
    icon: backbone,
    content: <Subpages groupId="4" />,
    showHeader: true,
    hide: true
  },
  {
    ...defaultPage,
    title: 'Klatka piersiowa i brzuch',
    description: 'Umów się na prześwietlenie tułowia',
    path: '/uslugi/klatkaPiersiowa',
    icon: chest,
    content: <Subpages groupId="2" />,
    showHeader: true,
    hide: true
  },
  {
    ...defaultPage,
    title: 'Kości i stawy',
    description: 'Umów się na prześwietlenie kości, lub stawów',
    path: '/uslugi/kosci',
    icon: joints,
    content: <Subpages groupId="3" />,
    showHeader: true,
    hide: true
  },
  {
    ...defaultPage,
    title: 'Nogi i miednica',
    description: 'Umów się na prześwietlenie dolnych kończyn',
    path: '/uslugi/nogi',
    icon: legs,
    content: <Subpages groupId="5" />,
    showHeader: true,
    hide: true
  }
];
