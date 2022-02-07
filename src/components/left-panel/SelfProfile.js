import styles from "../../styles/SelfProfile.module.css";
import NewChatIcon from "../../svg-icons/NewChatIcon";
import StatusIcon from "../../svg-icons/StatusIcon";
import SettingsIcon from "../../svg-icons/SettingsIcon";

const SelfProfile = () => {
  return (
    <div className={styles.selfProfile}>
      <div className={styles.profilePic}>Pic</div>

      <div className={styles.statusOptionsContainer}>
        <StatusIcon />
        <NewChatIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default SelfProfile;
