import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, onChange, value }) => {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
            value={value}
          />
        </form>
      </header>
    </>
  );
};
