import { FunctionComponent, useCallback } from "react";
import SectionCard from "../components/SectionCard";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1424.module.css";

const IPhone1424: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer9Click = useCallback(() => {
    navigate("/iphone-14-23");
  }, [navigate]);

  return (
    <div className={styles.iphone1424}>
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
      <SectionCard />
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
      <img className={styles.iphone1424Child} alt="" src="/ellipse-4@2x.png" />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.bemVindoAo}>BEM VINDO AO MY VÉLO</div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <div className={styles.groupDiv} onClick={onGroupContainer9Click}>
          <div className={styles.groupChild3} />
          <div className={styles.continuar}>Continuar</div>
        </div>
        <div className={styles.loremIpsumDolorContainer}>
          <p className={styles.loremIpsumDolor}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IPhone1424;
