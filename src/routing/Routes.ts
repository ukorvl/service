import { lazy } from 'react';
import { RouteModel } from './RouteModel';
import { Path } from './Path';

const MainView = lazy(() => import('../views/MainView'));
const View404 = lazy(() => import('../views/404'));
const LoginView = lazy(() => import('../views/LoginView'));

/**
 * App routes.
 */
export const routes: RouteModel[] = [
  {
    path: Path.root,
    Component: MainView,
  },
  {
    path: Path.login,
    Component: LoginView,
  },
  {
    path: Path.any,
    Component: View404,
  },
];
