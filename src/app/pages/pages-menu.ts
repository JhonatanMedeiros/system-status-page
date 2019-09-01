import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/',
  },
  {
    title: 'Configuration (WIP)',
    icon: 'settings-outline',
    children: [
      {
        title: 'WIP',
        link: '/list',
      }
    ],
  },
  {
    title: 'About',
    icon: 'info-outline',
    link: '/about'
  }
];
