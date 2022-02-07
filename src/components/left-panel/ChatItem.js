import styles from "../../styles/ChatItem.module.css";

const ChatItem = () => {
  return (
    <div className={styles.chatItemHolder}>
      <div className={styles.chatItem}></div>
      <hr className={styles.ruler}></hr>
    </div>
  );
};

export default ChatItem;
