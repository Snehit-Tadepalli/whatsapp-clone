import styles from "../../styles/LeftPanel.module.css";
import SelfProfile from "./SelfProfile";
import SearchBar from "./SearchBar";
import ChatsList from "./ChatsList";

const LeftPanel = () => {
  return (
    <div className={styles.leftPanel}>
      <SelfProfile />
      <SearchBar />
      <ChatsList />
    </div>
  );
};

export default LeftPanel;
