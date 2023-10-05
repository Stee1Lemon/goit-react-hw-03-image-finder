import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            name="picture"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
