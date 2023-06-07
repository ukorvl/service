import { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

/**
 * App locales.
 */
enum locales {
  ru = 'ru-RU',
  en = 'en-US',
}

/**
 * Language switcher.
 *
 * @returns React component.
 */
export const LanguageSwitcher = (): ReactElement => {
  const { i18n } = useTranslation();

  return (
    <div className="d-flex">
      {Object.keys(locales).map(x => (
        <Nav.Link
          onClick={() => i18n.changeLanguage(locales[x as keyof typeof locales])}
          key={x}
          active={i18n.language === locales[x as keyof typeof locales]}
          className={styles.link}
        >
          {x.toUpperCase()}
        </Nav.Link>
      ))}
    </div>
  );
};
