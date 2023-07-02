import { ReactNode } from 'react';
import styles from './MainContent.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const ContentBlock = ({ title, value }: { title: string, value?: string | ReactNode }) => {
  return (
    <div className={styles.div}>
      <strong>{`${title}:`}</strong>
      <div style={{paddingBottom: '0.75rem'}}>
        {value || 'Не определено'}
      </div>
    </div>
  )
}
