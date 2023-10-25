import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1419.module.css";

const IPhone1419: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  const onCriarContaTextClick = useCallback(() => {
    navigate("/iphone-14-21");
  }, [navigate]);

  const onLembreMeTextClick = useCallback(() => {
    navigate("/iphone-14-20");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-20");
  }, [navigate]);

  const onGroup1Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  return (
    <div className={styles.iphone1419}>
      <img className={styles.iphone1419Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1419Item} />
      <div className={styles.iphone1419Inner} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.email}>Email</div>
      <div className={styles.senha}>Senha</div>
      <div className={styles.login}>Login</div>
      <div className={styles.criarConta} onClick={onCriarContaTextClick}>
        Criar Conta
      </div>
      <div className={styles.lembreMeParent}>
        <div className={styles.lembreMe} onClick={onLembreMeTextClick}>
          Lembre-me
        </div>
        <div className={styles.groupChild} onClick={onRectangle3Click} />
      </div>
      <div className={styles.ouParent}>
        <div className={styles.ou}>ou</div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-4.svg"
        onClick={onGroup1Click}
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default IPhone1419;
