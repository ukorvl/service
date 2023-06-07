import { ReactElement, useCallback } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppearOnScreen } from '../components/AppearOnScreen';
import { PageLayout } from '../components/PageLayout';
import { Path } from '../routing';
import styles from './styles/expertise.module.scss';

/**
 * Expertise view.
 *
 * @returns React component.
 */
const ExpertiseView = (): ReactElement => {
  const {
    t,
    i18n: { language },
  } = useTranslation('expertise');

  const renderTextBlock = useCallback(
    (useTranslationIndex: string, title?: string) => (
      <AppearOnScreen<HTMLDivElement>
        animation="slide"
        timeout={500}
      >
        {({ ref }) => (
          <div
            className={styles.textBlock}
            ref={ref}
          >
            {title && <h4>{title}</h4>}
            {t(useTranslationIndex)}
          </div>
        )}
      </AppearOnScreen>
    ),
    [t],
  );

  return (
    <>
      <Helmet>
        <title>{language === 'en-US' ? 'Media' : 'Медиа'}</title>
      </Helmet>
      <PageLayout title={t('title') ?? undefined}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={8}
            className="mb-5"
          >
            <AppearOnScreen<HTMLDivElement>
              animation="slide"
              timeout={500}
            >
              {({ ref }) => (
                <div
                  className={styles.textBlock}
                  ref={ref}
                >
                  <h4 className="text-center">
                    {language === 'en-US' ? 'Analytics' : 'Аналитика'}
                  </h4>
                  {t('texts.analytics')}
                  <div className="mt-3">
                    <Link to={Path.weeklyReview}>
                      <Button variant="secondary">
                        {language === 'en-US' ? 'Read review' : 'Смотреть отчет'}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </AppearOnScreen>
          </Col>
          <Col
            xs={12}
            md={8}
          >
            {renderTextBlock(
              'texts.trustManagement',
              language === 'en-US' ? 'Trust management' : 'Доверительное управление',
            )}
            {renderTextBlock(
              'texts.brokerageService',
              language === 'en-US' ? 'Brokerage service' : 'Брокерские услуги',
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={8}
          >
            <AppearOnScreen<HTMLDivElement>
              animation="slide"
              timeout={500}
            >
              {({ ref }) => (
                <ListGroup
                  className={styles.deposits}
                  ref={ref}
                >
                  <h4 className="text-center">{language === 'en-US' ? 'Deposits' : 'Депозиты'}</h4>
                  {depositsConfig.map((x, i) => (
                    <ListGroup.Item key={i}>{t(x.text)}</ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </AppearOnScreen>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default ExpertiseView;

const depositsConfig = [
  {
    text: 'texts.deposits.1',
  },
  {
    text: 'texts.deposits.2',
  },
  {
    text: 'texts.deposits.3',
  },
  {
    text: 'texts.deposits.4',
  },
  {
    text: 'texts.deposits.5',
  },
  {
    text: 'texts.deposits.6',
  },
  {
    text: 'texts.deposits.7',
  },
  {
    text: 'texts.deposits.8',
  },
  {
    text: 'texts.deposits.9',
  },
  {
    text: 'texts.deposits.10',
  },
];
