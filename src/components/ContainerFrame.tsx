import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContainerFrame.module.css";

const ContainerFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-14-19");
  }, [navigate]);

  return (
    <div className={styles.frame} onClick={onFrameContainerClick}>
      <div className={styles.titleAndDescription}>
        <div className={styles.permitirQueMy}>
          Permitir que “My Vélo” rastreie suas atividades?
        </div>
        <div className={styles.aoClicarEm}>
          Ao clicar em permitir você permite...
        </div>
        <div className={styles.frame1} />
      </div>
      <div className={styles.buttons}>
        <div className={styles.button1Preferred}>
          <div className={styles.title}>Não permitir</div>
        </div>
        <div className={styles.button1Preferred}>
          <div className={styles.title1}>Permitir</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFrame;
