import styles from "../../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search or start a new chat"
      ></input>
    </div>
  );
};

export default SearchBar;
