import styles from "../../styles/left-panel/SearchBar.module.css";
import SearchIcon from "../../svg-icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchItemsContainer}>
        <SearchIcon />
        <input
          title="Search"
          className={styles.search}
          type="text"
          placeholder="Search or start a new chat"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
