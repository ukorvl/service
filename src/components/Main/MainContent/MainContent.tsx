import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { browserName } from './getBrowserName';
import { screenResolution } from './screenResolution';
import os from './os';
import { isTouchDevice } from './isTouch';
import { ContentBlock } from './ContentBlock';
import styles from './MainContent.module.scss';
import { GPU } from './Gpu';
import { Ip } from './Ip';

/**
 * Footer.
 *
 * @returns React component.
 */
export const MainContent = (): ReactElement => {
  return (
    <Container
      fluid
      className={`text-bg-light ${styles.content}`}
    >
      <Row className={`text-center justify-content-center pb-5 pt-5`}>
        <Col xs={12} md={4} className={styles.col}>
          <h5 className={styles.title}>Данные об устройстве</h5>
          <ContentBlock
            title='Браузер'
            value={browserName}
          />
          <ContentBlock
            title="Операционная система"
            value={os}
          />
          <ContentBlock
            title="JavaScript"
            value="Доступен"
          />
          <ContentBlock
            title="Состояние подключения"
            value={navigator.onLine ? 'Онлайн' : 'Оффлайн'}
          />
          <ContentBlock
            title="Coockies"
            value={navigator.cookieEnabled ? 'Доступны' : 'Заблокированы'}
          />
          <ContentBlock
            title="Язык устройства"
            value={navigator.language}
          />
          <ContentBlock
            title="Движок"
            value={navigator.product}
          />
          <GPU />
          <ContentBlock
            title='Сенсорное устройство'
            value={isTouchDevice() ? 'Да' : 'Нет'}
          />
        </Col>
        <Col xs={12} md={4} className={styles.col}>
          <h5 className={styles.title}>Сетевые данные</h5>
          <Ip />
        </Col>
        <Col xs={12}>
          <Button
            className={styles.btn}
          >
            Выполнить полную диагностику
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
