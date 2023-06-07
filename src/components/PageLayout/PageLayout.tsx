import { ReactElement, ReactNode } from 'react';
import { Col, Container, Row, Breadcrumb } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Path } from '../../routing';
import styles from './PageLayout.module.scss';

/**
 * Page layout props.
 */
type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

/**
 * Page title component.
 *
 * @param {PageLayoutProps} props Props.
 * @returns React component.
 */
export const PageLayout = ({ title, children }: PageLayoutProps): ReactElement => {
  const {
    i18n: { language },
  } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.image}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href={Path.root}>
            {language === 'en-US' ? 'Homepage' : 'Главная страница'}
          </Breadcrumb.Item>
          <Breadcrumb.Item href={pathname}>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Container fluid>
        <Row>
          {title && <h1 className={cn('text-danger', 'text-center', styles.title)}>{title}</h1>}
        </Row>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
};
