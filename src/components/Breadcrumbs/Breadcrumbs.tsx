import { ReactElement } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

/**
 * Breadcrumbs.
 *
 * @returns React component.
 */
export const Breadcrumbs = (): ReactElement => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
};