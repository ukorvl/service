import { CSSProperties, ReactElement, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Path } from '../../routing';
import { LanguageSwitcher } from '../LanguageProvider';
import styles from './Header.module.scss';

/**
 * Header.
 *
 * @returns React component.
 */
export const Header = (): ReactElement => {
  const { t } = useTranslation('common', { keyPrefix: 'header' });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      className={styles.header}
      style={headerStyle}
      variant="dark"
      bg="dark"
    >
      <Container>
        <Link to={Path.root}>
          <Navbar.Brand>
            Great.
            <strong className="text-danger">Do</strong>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Offcanvas
          aria-labelledby="offcanvasLabel"
          placement="end"
          show={menuOpen}
          onHide={() => setMenuOpen(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasLabel">{t('offcanvasTitle')}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {headerLinksConfig.map(({ text, link }) => (
                <Nav.Link
                  key={text}
                  as={Link}
                  to={link}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(text)}
                </Nav.Link>
              ))}
              <Nav.Link
                as={Link}
                to={headerPersonalAccountConfig.link}
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon
                  className="me-2"
                  icon={headerPersonalAccountConfig.icon}
                />
                {t(headerPersonalAccountConfig.text)}
              </Nav.Link>
            </Nav>
            <Nav>
              <LanguageSwitcher />
              {headerIconsConfig.map(({ link, icon }) => (
                <Nav.Link
                  key={link}
                  href={link}
                >
                  <FontAwesomeIcon icon={icon} />
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

/**
 * Header links configuration.
 */
const headerLinksConfig = [
  {
    link: Path.about,
    text: 'about',
  },
  {
    link: Path.expertise,
    text: 'expertise',
  },
  {
    link: Path.media,
    text: 'media',
  },
  {
    link: Path.appointment,
    text: 'scheduleMeeting',
  },
];

/**
 * Personal account link configuration.
 */
const headerPersonalAccountConfig = {
  link: Path.account,
  text: 'account',
  icon: ['fas', 'user'] as [IconPrefix, IconName],
};

/**
 * Header icons config.
 */
const headerIconsConfig: Array<{
  link?: string;
  icon: [IconPrefix, IconName];
}> = [
  {
    link: process.env.REACT_APP_TELEGRAM,
    icon: ['fab', 'telegram'],
  },
  {
    link: `tel:${process.env.REACT_APP_SITE_PHONE_NUMBER}`,
    icon: ['fas', 'square-phone'],
  },
];

/**
 * Styles.
 */
const headerStyle = {
  '--bs-navbar-brand-font-size': '2.5rem',
} as CSSProperties;
