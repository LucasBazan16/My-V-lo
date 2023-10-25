import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1433.module.css";

const IPhone1433: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIPhone1433Click = useCallback(() => {
    navigate("/iphone-14-32");
  }, [navigate]);

  return (
    <div className={styles.iphone1433} onClick={onIPhone1433Click}>
      <img className={styles.iphone1433Child} alt="" src="/group-18.svg" />
      <div className={styles.statusBarWrapper}>
        <div className={styles.statusBar}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <img className={styles.levelsIcon} alt="" src="/levels.svg" />
        </div>
      </div>
      <div className={styles.beaDuarteMuilocaaaContainer}>
        <p className={styles.beaDuarte}>Bea Duarte</p>
        <p className={styles.muilocaaa}>@muilocaaa</p>
      </div>
      <img className={styles.arrowLeft2} alt="" src="/arrow--left-2.svg" />
      <div className={styles.pontuao}>Pontuação</div>
      <div className={styles.iphone1433Item} />
      <img className={styles.iphone1433Inner} alt="" src="/ellipse-41@2x.png" />
    </div>
  );
};

export default IPhone1433;
