import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import styles from "./IPhone1423.module.css";

const IPhone1423: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHamburguer1IconClick = useCallback(() => {
    navigate("/iphone-14-34");
  }, [navigate]);

  const onEllipseImageClick = useCallback(() => {
    navigate("/iphone-14-32");
  }, [navigate]);

  return (
    <div className={styles.iphone1423}>
      <div className={styles.mapaaaaaaaa1Parent}>
        <img
          className={styles.mapaaaaaaaa1Icon}
          alt=""
          src="/mapaaaaaaaa-1@2x.png"
        />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.paraOndeVamos}>Para onde vamos?</div>
        <img className={styles.lupaad1Icon} alt="" src="/lupaad-1@2x.png" />
        <img className={styles.mic1Icon} alt="" src="/mic-1@2x.png" />
      </div>
      <SectionCard
        propCursor="pointer"
        onHamburguer1IconClick={onHamburguer1IconClick}
      />
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>67%</div>
          <img className={styles.bateria1Icon} alt="" src="/bateria-1@2x.png" />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupInner} />
          <div className={styles.groupChild1} />
          <div className={styles.myVlo}>MY VÉLO</div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}>67%</div>
          <img className={styles.bateria1Icon} alt="" src="/bateria-1@2x.png" />
        </div>
      </div>
      <img className={styles.sadasd1Icon} alt="" src="/sadasd-1@2x.png" />
      <img className={styles.sol1Icon} alt="" src="/sol-1@2x.png" />
      <img
        className={styles.iphone1423Child}
        alt=""
        src="/ellipse-4@2x.png"
        onClick={onEllipseImageClick}
      />
    </div>
  );
};

export default IPhone1423;
