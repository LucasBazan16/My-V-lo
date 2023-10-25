import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1432.module.css";

const IPhone1432: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseImageClick = useCallback(() => {
    navigate("/iphone-14-33");
  }, [navigate]);

  const onArrowLeft2Click = useCallback(() => {
    navigate("/iphone-14-23");
  }, [navigate]);

  return (
    <div className={styles.iphone1432}>
      <img className={styles.iphone1432Child} alt="" src="/group-18.svg" />
      <div className={styles.statusBarWrapper}>
        <div className={styles.statusBar}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <img className={styles.levelsIcon} alt="" src="/levels.svg" />
        </div>
      </div>
      <img
        className={styles.iphone1432Item}
        alt=""
        src="/ellipse-42@2x.png"
        onClick={onEllipseImageClick}
      />
      <div className={styles.beaDuarteMuilocaaaContainer}>
        <p className={styles.beaDuarte}>Bea Duarte</p>
        <p className={styles.muilocaaa}>@muilocaaa</p>
      </div>
      <img
        className={styles.arrowLeft2}
        alt=""
        src="/arrow--left-2.svg"
        onClick={onArrowLeft2Click}
      />
      <div className={styles.pontuao}>Pontuação</div>
    </div>
  );
};

export default IPhone1432;
