import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const email = process.env.REACT_APP_SITE_EMAIL;

/**
 * Footer.
 *
 * @returns React component.
 */
export const Footer = (): ReactElement => {
  const { t } = useTranslation('common', { keyPrefix: 'footer' });

  return (
    <Container
      fluid
      className={styles.footer}
    >
      <Row className="text-center">
        <Col xs={12}>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </Col>
        <Col xs={12}>
          <p>{t('disclaimer')}</p>
          <p>{`© Great.Do, ${new Date().getFullYear()}`}</p>
        </Col>
      </Row>
    </Container>
  );
};
