import styles from "../styles/App.module.css";
import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.app}>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
