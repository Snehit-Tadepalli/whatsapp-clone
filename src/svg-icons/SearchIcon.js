import React from "react";
import styles from "../styles/svg-icons/SearchIcon.module.css";

const SearchIcon = () => {
  const [isSearching, setIsSearching] = React.useState(false);

  const whileSearching = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={styles.searchIcon}
    >
      <path
        fill="#008069"
        d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
      ></path>
    </svg>
  );

  const whileNotSearching = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={styles.searchIcon}
    >
      <path
        fill="currentColor"
        d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
      ></path>
    </svg>
  );

  return (
    <div
      title={isSearching ? "Cancel" : "Search"}
      className={styles.searchIconHolder}
    >
      {isSearching ? whileSearching : whileNotSearching}
    </div>
  );
};

export default SearchIcon;
