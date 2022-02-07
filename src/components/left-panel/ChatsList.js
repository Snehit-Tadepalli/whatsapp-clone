import styles from "../../styles/ChatsList.module.css";
import ChatItem from "./ChatItem";

const ChatsList = () => {
  return (
    <div className={styles.chatsList}>
      <ChatItem />
      <ChatItem />
    </div>
  );
};

export default ChatsList;
