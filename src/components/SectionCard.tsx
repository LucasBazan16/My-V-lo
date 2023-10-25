import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionCard.module.css";

type SectionCardType = {
  /** Style props */
  propCursor?: CSSProperties["cursor"];

  /** Action props */
  onHamburguer1IconClick?: () => void;
};

const SectionCard: FunctionComponent<SectionCardType> = ({
  propCursor,
  onHamburguer1IconClick,
}) => {
  const hamburguer1IconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.hamburguer1Parent}>
      <img
        className={styles.hamburguer1Icon}
        alt=""
        src="/hamburguer-1@2x.png"
        style={hamburguer1IconStyle}
        onClick={onHamburguer1IconClick}
      />
      <div className={styles.statusBar}>
        <div className={styles.time}>
          <div className={styles.time1}>9:41</div>
        </div>
        <img className={styles.levelsIcon} alt="" src="/levels.svg" />
      </div>
    </div>
  );
};

export default SectionCard;
