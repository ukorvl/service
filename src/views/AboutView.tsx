import { ReactElement, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AppearOnScreen } from '../components/AppearOnScreen';
import { PageLayout } from '../components/PageLayout';
import styles from './styles/about.module.scss';

/**
 * About view.
 *
 * @returns React component.
 */
const AboutView = (): ReactElement => {
  const {
    t,
    i18n: { language },
  } = useTranslation('about');

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
        <title>{language === 'en-US' ? 'About' : 'О проекте'}</title>
      </Helmet>
      <PageLayout title={t('title') ?? undefined}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={8}
          >
            {renderTextBlock('texts.intro')}
            <AppearOnScreen<HTMLDivElement>
              animation="slide"
              timeout={500}
            >
              {({ ref }) => (
                <div
                  className={styles.textBlock}
                  ref={ref}
                >
                  <h4>{t('texts.motto1')}</h4>
                  <h4>{t('texts.motto2')}</h4>
                </div>
              )}
            </AppearOnScreen>
            {renderTextBlock('texts.team', language === 'en-US' ? 'Team' : 'Команда')}
            {renderTextBlock('texts.service', language === 'en-US' ? 'Service' : 'Сервис')}
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default AboutView;
