import styles from "../../styles/left-panel/SelfProfile.module.css";
import NewChatIcon from "../../svg-icons/NewChatIcon";
import StatusIcon from "../../svg-icons/StatusIcon";
import SettingsIcon from "../../svg-icons/SettingsIcon";

const SelfProfile = () => {
  return (
    <div className={styles.selfProfile}>
      <div className={styles.profilePic}>Pic</div>

      <div className={styles.statusOptionsContainer}>
        <StatusIcon className={styles.statusIcon} />
        <NewChatIcon className={styles.newChatIcon} />
        <SettingsIcon className={styles.settingsIcon} />
      </div>
    </div>
  );
};

export default SelfProfile;
