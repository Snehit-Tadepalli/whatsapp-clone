import styles from "../styles/svg-icons/SettingsIcon.module.css";

const SettingsIcon = () => {
  return (
    <div title="Menu">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className={styles.settingsIcon}
      >
        <path
          fill="currentColor"
          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        ></path>
      </svg>
    </div>
  );
};

export default SettingsIcon;
