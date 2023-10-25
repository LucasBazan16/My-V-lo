import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AppIcon.module.css";

type AppIconType = {
  noAppIcon?: string;
  appName?: string;
  showAppName?: boolean;
  showBadge?: boolean;
  showAppIcon?: boolean;

  /** Style props */
  appIconPosition?: CSSProperties["position"];
  appIconTop?: CSSProperties["top"];
  appIconLeft?: CSSProperties["left"];
  appNameFontFamily?: CSSProperties["fontFamily"];
};

const AppIcon: FunctionComponent<AppIconType> = ({
  noAppIcon,
  appName = "App Name",
  showAppName = true,
  showBadge = false,
  showAppIcon,
  appIconPosition,
  appIconTop,
  appIconLeft,
  appNameFontFamily,
}) => {
  const appIconStyle: CSSProperties = useMemo(() => {
    return {
      position: appIconPosition,
      top: appIconTop,
      left: appIconLeft,
    };
  }, [appIconPosition, appIconTop, appIconLeft]);

  const appNameStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily,
    };
  }, [appNameFontFamily]);

  return (
    <div className={styles.appIcon} style={appIconStyle}>
      <div className={styles.frame}>
        {showAppIcon && (
          <div className={styles.appIcon1}>
            <img className={styles.noAppIcon} alt="" src={noAppIcon} />
          </div>
        )}
        {showBadge && (
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        )}
      </div>
      {showAppName && (
        <div className={styles.appName} style={appNameStyle}>
          {appName}
        </div>
      )}
    </div>
  );
};

export default AppIcon;
