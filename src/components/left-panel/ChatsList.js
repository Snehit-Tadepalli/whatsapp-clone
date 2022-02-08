import styles from "../../styles/left-panel/ChatsList.module.css";
import ChatItemHolder from "./ChatItemHolder";

const ChatsList = () => {
  return (
    <div className={styles.chatsList}>
      <ChatItemHolder status={true} />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
      <ChatItemHolder />
    </div>
  );
};

export default ChatsList;
