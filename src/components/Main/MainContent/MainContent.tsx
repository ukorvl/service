import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path } from '../../../routing';
import { AppearOnScreen } from '../../AppearOnScreen';
import { ScheduleCallCard } from '../ScheduleCallCard';
import styles from './MainContent.module.scss';

/**
 * Footer.
 *
 * @returns React component.
 */
export const MainContent = (): ReactElement => {
  const { t } = useTranslation('main');

  return (
    <Container
      fluid
      className={`text-bg-light ${styles.content}`}
    >
      <h1 className="display-1 text-danger text-center pt-5">{t('content.heading')}</h1>
      <Row className={`text-center justify-content-center pb-5 ${styles.features}`}>
        {featuresConfig.map(({ icon, link }, i) => (
          <Col
            xs={12}
            sm={6}
            lg={4}
            key={i}
          >
            <AppearOnScreen<HTMLDivElement>>
              {({ ref }) => (
                <Card
                  className="text-bg-dark my-4"
                  ref={ref}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon
                        size="3x"
                        icon={icon}
                      />
                    </Card.Title>
                    <Card.Text>{t(`content.${i}`)}</Card.Text>
                    {link && (
                      <Card.Link
                        as={Link}
                        to={link}
                      >
                        {t('content.linkText')}
                      </Card.Link>
                    )}
                  </Card.Body>
                </Card>
              )}
            </AppearOnScreen>
          </Col>
        ))}
      </Row>
      <Row className="text-bg-danger">
        <Col
          xs={12}
          lg={7}
          className="g-0"
        >
          <div className={styles.missionImage}>
            <ScheduleCallCard />
          </div>
        </Col>
        <Col
          xs={12}
          lg={5}
          className="g-0 d-flex align-items-center"
        >
          <h1 className="text-bg-danger text-center py-5">{t('mission.motto')}</h1>
        </Col>
      </Row>
    </Container>
  );
};

/**
 * Features config.
 */
const featuresConfig: Array<{
  icon: [IconPrefix, IconName];
  link?: Path;
}> = [
  {
    icon: ['fas', 'briefcase'],
    link: Path.appointment,
  },
  {
    icon: ['fas', 'shield-halved'],
    link: Path.appointment,
  },
  {
    icon: ['fas', 'percent'],
    link: Path.appointment,
  },
  {
    icon: ['fas', 'handshake'],
    link: Path.appointment,
  },
  {
    icon: ['fas', 'building-shield'],
    link: Path.appointment,
  },
];
