import { ReactElement, useEffect, useState } from 'react';
import FingerprintJS, { GetResult } from '@fingerprintjs/fingerprintjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import langmap from "langmap";
import { detectIncognito } from "detectincognitojs";
import { browserName } from './getBrowserName';
import os from './os';
import { isTouchDevice } from './isTouch';
import { ContentBlock } from './ContentBlock';
import { GPU } from './Gpu';
import { Ip } from './Ip';
import battery from "./battery";
import styles from './MainContent.module.scss';

/**
 * Footer.
 *
 * @returns React component.
 */
export const MainContent = (): ReactElement => {
  const [fpResult, setFpResult] = useState<GetResult>();
  const [incognito, setIncognito] = useState<boolean>();
  const [batteryInfo, setBatteryInfo] = useState<{ level: string, charging: string }>();

  useEffect(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    const fpPromise = FingerprintJS.load()

      ; (async () => {
        // Get the visitor identifier when you need it.
        try {
          const fp = await fpPromise
          const result = await fp.get()
          setFpResult(result);
        } catch {

        }
      })()
  }, []);

  useEffect(() => {
    detectIncognito().then((result) => {
      setIncognito(result.isPrivate);
    });

    const getBattery = async () => {
      const info = await battery();
      setBatteryInfo(info);
    };
    getBattery();
  }, []);

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
            title="Движок"
            value={navigator.product}
          />
          <ContentBlock
            title="AppName"
            value={navigator.appName}
          />
          <GPU />
          <ContentBlock
            title='Сенсорное устройство'
            value={isTouchDevice() ? 'Да' : 'Нет'}
          />
          {fpResult && (
            <>
              <ContentBlock
                title="Язык устройства"
                value={<ul style={{ paddingLeft: '1rem', marginBottom: 0 }}>{fpResult.components?.languages.value?.map((x, i) =>
                  (<li key={i}>{x.map(x => langmap[x].nativeName).join(', ')}</li>))}</ul>
                }
              />
              <ContentBlock
                title='Режим Reduced motion'
                value={fpResult.components?.reducedMotion.value ? 'Да' : 'Нет'}
              />
              <ContentBlock
                title='Local storage'
                value={fpResult.components?.localStorage.value ? 'Доступен' : 'Недоступен'}
              />
              <ContentBlock
                title='Session storage'
                value={fpResult.components?.sessionStorage.value ? 'Доступен' : 'Недоступен'}
              />
              <ContentBlock
                title='IndexedDB storage'
                value={fpResult.components?.indexedDB.value ? 'Доступен' : 'Недоступен'}
              />
              <ContentBlock
                title='Плагины браузера'
                value={fpResult.components?.plugins.value?.length ?
                  <ul style={{ paddingLeft: '1rem' }}>{fpResult.components?.plugins.value?.map(x => (<li key={x.name}>{x.name}</li>))}</ul>
                  : 'Не найдено'}
              />
              <ContentBlock
                title='Глубина цвета экрана'
                value={fpResult.components.colorDepth.value}
              />
            </>
          )}
          {batteryInfo && (
            <>
              <ContentBlock
                title='Уровень заряда'
                value={batteryInfo.level}
              />
              <ContentBlock
                title='Заряжается'
                value={batteryInfo.charging}
              />
            </>
          )}
        </Col>
        <Col xs={12} md={4} className={styles.col}>
          <h5 className={styles.title}>Сетевые данные</h5>
          <Ip />
          {incognito !== undefined && (
            <ContentBlock
              title='Режим инкогнито'
              value={incognito ? 'Да' : 'Нет'}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
