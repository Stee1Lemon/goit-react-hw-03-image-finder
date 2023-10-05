import styles from './Button.module.css';

export const ButtonMore = () => {
  return (
    <div className={styles.loadMoreContainer}>
      <button type="button" className={styles.button}>
        Load more
      </button>
    </div>
  );
};
