import styles from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
