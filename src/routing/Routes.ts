import { lazy } from 'react';
import { RouteModel } from './RouteModel';
import { Path } from './Path';

const MainView = lazy(() => import('../views/MainView'));
const View404 = lazy(() => import('../views/404'));

/**
 * App routes.
 */
export const routes: RouteModel[] = [
  {
    path: Path.root,
    Component: MainView,
  },
  {
    path: Path.any,
    Component: View404,
  },
];
