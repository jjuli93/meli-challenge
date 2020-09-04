import { lazy } from 'react';

import { home } from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));

export const ROUTES = [
  {
    exact: false,
    path: home,
    component: Home
  }
];
