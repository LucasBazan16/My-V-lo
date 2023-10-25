import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1421.module.css";

const IPhone1421: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-24");
  }, [navigate]);

  const onEuConcordoComClick = useCallback(() => {
    navigate("/iphone-14-22");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/iphone-14-22");
  }, [navigate]);

  return (
    <div className={styles.iphone1421}>
      <img className={styles.iphone1421Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1421Item} />
      <div className={styles.iphone1421Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone1421Child1} />
      <div className={styles.iphone1421Child2} onClick={onRectangle4Click} />
      <div className={styles.nomeCompleto}>Nome completo</div>
      <div className={styles.senha}>Senha</div>
      <div className={styles.email}>Email</div>
      <div className={styles.confirmarSenha}>Confirmar senha</div>
      <div className={styles.criarConta}>Criar conta</div>
      <div className={styles.euConcordoComOsTermosParent}>
        <div className={styles.euConcordoCom} onClick={onEuConcordoComClick}>
          Eu concordo com os termos
        </div>
        <div className={styles.groupChild} onClick={onRectangle5Click} />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default IPhone1421;
