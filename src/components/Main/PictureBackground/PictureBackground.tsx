import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PictureBackground.module.scss';

/**
 * Picture background.
 *
 * @returns React component.
 */
export const PictureBackground = (): ReactElement => {
  const { t } = useTranslation('main', { keyPrefix: 'title' });

  return (
    <div className={styles.bgContainer}>
      <div className={styles.title}>
        <strong className={styles.letter}>G</strong>
        <div className={styles.text}>
          <div>{t('first')}</div>
          <div>{t('second')}</div>
        </div>
      </div>
    </div>
  );
};
