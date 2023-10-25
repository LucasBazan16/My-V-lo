import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1422.module.css";

const IPhone1422: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  const onEuConcordoComClick = useCallback(() => {
    navigate("/iphone-14-21");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/iphone-14-21");
  }, [navigate]);

  return (
    <div className={styles.iphone1422}>
      <img className={styles.iphone1422Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1422Item} />
      <div className={styles.iphone1422Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone1422Child1} />
      <div className={styles.iphone1422Child2} onClick={onRectangle4Click} />
      <div className={styles.nomeCompleto}>Nome completo</div>
      <div className={styles.senha}>Senha</div>
      <div className={styles.email}>Email</div>
      <div className={styles.confirmarSenha}>Confirmar senha</div>
      <div className={styles.criarConta}>Criar conta</div>
      <div className={styles.euConcordoComOsTermosParent}>
        <div className={styles.euConcordoCom} onClick={onEuConcordoComClick}>
          Eu concordo com os termos
        </div>
        <div className={styles.x} onClick={onXTextClick}>
          X
        </div>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default IPhone1422;
