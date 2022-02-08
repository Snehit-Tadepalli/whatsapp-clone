import styles from "../../styles/left-panel/ChatItemHolder.module.css";
import ChatItem from "../left-panel/ChatItem";

const ChatItemHolder = ({ status }) => {
  return (
    <div className={`${styles.chatItemHolder} ${status ? styles.active : ""}`}>
      <ChatItem />
      <hr className={styles.ruler}></hr>
    </div>
  );
};

export default ChatItemHolder;
