import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PictureBackground } from '../components';
import { MainContent } from '../components/Main/MainContent';

/**
 * Main view.
 *
 * @returns React component.
 */
const MainView = (): ReactElement => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{language === 'en-US' ? 'Main' : 'Главная'}</title>
      </Helmet>
      <PictureBackground />
      <MainContent />
    </>
  );
};

export default MainView;
