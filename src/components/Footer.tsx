import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.dock}>
      <div className={styles.background}>
        <div className={styles.dockApp1}>
          <div className={styles.dockApp11}>
            <img className={styles.phoneIcon} alt="" src="/phone@2x.png" />
          </div>
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        </div>
        <div className={styles.dockApp1}>
          <div className={styles.dockApp11}>
            <img className={styles.phoneIcon} alt="" src="/safari@2x.png" />
          </div>
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        </div>
        <div className={styles.dockApp1}>
          <div className={styles.dockApp11}>
            <img className={styles.phoneIcon} alt="" src="/messages@2x.png" />
          </div>
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        </div>
        <div className={styles.dockApp1}>
          <div className={styles.dockApp11}>
            <img className={styles.phoneIcon} alt="" src="/music@2x.png" />
          </div>
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
