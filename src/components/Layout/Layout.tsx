import { ReactElement, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.scss';

/**
 * Layout props.
 */
type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout.
 *
 * @param {LayoutProps} props Props.
 * @returns React component.
 */
export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>{children}</div>
    </div>
  );
};
