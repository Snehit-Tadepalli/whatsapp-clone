import styles from "../../styles/RightPanel.module.css";

const RightPanel = () => {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.userProfile}></div>
      <div className={styles.userChat}></div>
      <div className={styles.chatOptions}></div>
    </div>
  );
};

export default RightPanel;
