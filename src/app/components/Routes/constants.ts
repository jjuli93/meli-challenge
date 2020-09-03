import { lazy } from 'react';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));

export const ROUTES = [
  {
    exact: false,
    path: PATHS.home,
    component: Home
  }
];
