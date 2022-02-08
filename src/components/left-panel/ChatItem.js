import styles from "../../styles/left-panel/ChatItem.module.css";

const ChatItem = () => {
  return (
    <div className={styles.chatItem}>
      <div className={styles.chatPicAndNameHolder}>
        <div className={styles.chatPic}>Pic</div>

        <div className={styles.chatNameContainer}>
          <div className={styles.chatName}>Name</div>
          <div className={styles.lastChatMessage}>Message</div>
        </div>
      </div>

      <div className={styles.chatDetailsContainer}>
        <div className={styles.lastChatTime}>Time</div>
        <div className={styles.chatUnreadCount}>5</div>
      </div>
    </div>
  );
};

export default ChatItem;
