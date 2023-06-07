import { ComponentType, LazyExoticComponent } from 'react';
import { Path } from './Path';

/**
 * Route model.
 */
export type RouteModel = {
  path: Path;
  Component: LazyExoticComponent<ComponentType>;
};
