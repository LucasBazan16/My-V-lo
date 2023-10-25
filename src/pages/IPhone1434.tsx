import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1434.module.css";

const IPhone1434: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowLeft2Click = useCallback(() => {
    navigate("/iphone-14-23");
  }, [navigate]);

  return (
    <div className={styles.iphone1434}>
      <img className={styles.iphone1434Child} alt="" src="/group-18.svg" />
      <div className={styles.statusBarWrapper}>
        <div className={styles.statusBar}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <img className={styles.levelsIcon} alt="" src="/levels.svg" />
        </div>
      </div>
      <b className={styles.menu}>Menu</b>
      <img
        className={styles.arrowLeft2}
        alt=""
        src="/arrow--left-2.svg"
        onClick={onArrowLeft2Click}
      />
      <div className={styles.configuraes}>Configurações</div>
      <div className={styles.histrico}>Histórico</div>
      <div className={styles.acessibilidade}>Acessibilidade</div>
    </div>
  );
};

export default IPhone1434;
