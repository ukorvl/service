import styles from './MainContent.module.scss';

export const ContentBlock = ({ title, value }: { title: string, value?: string }) => {
  return (
    <div className={styles.div}>
      <strong>{`${title}:`}</strong>
      <p>
        {value || 'Не определено'}
      </p>
    </div>
  )
}
