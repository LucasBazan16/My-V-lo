import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AppIcon from "./AppIcon";
import styles from "./ContainerCardFormFilter.module.css";

type ContainerCardFormFilterType = {
  iconImageUrl?: string;
  appIconText?: string;
  iconLabel?: string;
  categoryIconImageUrl?: string;
  imageIconText?: string;
  componentImageUrl?: string;
  iconText?: string;
  appIconImageUrl?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ContainerCardFormFilter: FunctionComponent<
  ContainerCardFormFilterType
> = ({
  iconImageUrl,
  appIconText,
  iconLabel,
  categoryIconImageUrl,
  imageIconText,
  componentImageUrl,
  iconText,
  appIconImageUrl,
  propTop,
}) => {
  const row4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.row4} style={row4Style}>
      <AppIcon
        noAppIcon="/settings@2x.png"
        appName="Settings"
        showAppName
        showBadge={false}
        showAppIcon
        appIconPosition="absolute"
        appIconTop="0px"
        appIconLeft="271px"
        appNameFontFamily="Helvetica"
      />
      <AppIcon
        noAppIcon="/wallet@2x.png"
        appName="Wallet"
        showAppName
        showBadge={false}
        showAppIcon
        appIconPosition="absolute"
        appIconTop="0px"
        appIconLeft="180.7px"
        appNameFontFamily="Helvetica"
      />
      <AppIcon
        noAppIcon="/health@2x.png"
        appName="Health"
        showAppName
        showBadge={false}
        showAppIcon
        appIconPosition="absolute"
        appIconTop="0px"
        appIconLeft="90.3px"
        appNameFontFamily="Helvetica"
      />
      <AppIcon
        noAppIcon="/maps@2x.png"
        appName="Maps"
        showAppName
        showBadge={false}
        showAppIcon
        appIconPosition="absolute"
        appIconTop="0px"
        appIconLeft="0px"
        appNameFontFamily="Helvetica"
      />
    </div>
  );
};

export default ContainerCardFormFilter;
