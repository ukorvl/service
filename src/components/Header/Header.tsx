import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';

/**
 * Header.
 *
 * @returns React component.
 */
export const Header = (): ReactElement => {
  return (
    <Navbar
      expand="lg"
      className={styles.header}
      variant="grey"
      bg="primary"
    >
      <Container>
        <Navbar.Brand className={styles.brand}>
          Диагностика пользователя
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
