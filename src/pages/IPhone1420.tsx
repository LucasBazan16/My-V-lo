import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1420.module.css";

const IPhone1420: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  const onCriarContaTextClick = useCallback(() => {
    navigate("/iphone-14-21");
  }, [navigate]);

  const onLembreMeTextClick = useCallback(() => {
    navigate("/iphone-14-19");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/iphone-14-19");
  }, [navigate]);

  const onGroup1Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  return (
    <div className={styles.iphone1420}>
      <img className={styles.iphone1420Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1420Item} />
      <div className={styles.iphone1420Inner} />
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
        <div className={styles.groupChild} />
      </div>
      <div className={styles.ouParent}>
        <div className={styles.ou}>ou</div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <div className={styles.x} onClick={onXTextClick}>
        X
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

export default IPhone1420;
