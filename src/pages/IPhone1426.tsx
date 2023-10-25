import { FunctionComponent } from "react";
import ContainerFrame from "../components/ContainerFrame";
import styles from "./IPhone1426.module.css";

const IPhone1426: FunctionComponent = () => {
  return (
    <div className={styles.iphone1426}>
      <img className={styles.iphone1426Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1426Item} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.iphone1426Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.email}>Email</div>
      <div className={styles.senha}>Senha</div>
      <div className={styles.login}>Login</div>
      <div className={styles.criarConta}>Criar Conta</div>
      <div className={styles.lembreMeParent}>
        <div className={styles.lembreMe}>Lembre-me</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.ouParent}>
        <div className={styles.ou}>ou</div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-4.svg" />
      <ContainerFrame />
    </div>
  );
};

export default IPhone1426;
