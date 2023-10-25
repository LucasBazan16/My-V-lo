import { FunctionComponent, useCallback } from "react";
import ModeDark from "../components/ModeDark";
import { useNavigate } from "react-router-dom";
import styles from "./IPhoneHomeScreenDark.module.css";

const IPhoneHomeScreenDark: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer24Click = useCallback(() => {
    navigate("/iphone-14-25");
  }, [navigate]);

  return (
    <div className={styles.iphoneHomeScreenDark}>
      <ModeDark
        noAppIcon="/no-app-icon@2x.png"
        noAppIcon1="/no-app-icon2@2x.png"
        noAppIcon2="/no-app-icon3@2x.png"
        noAppIcon3="/no-app-icon@2x.png"
        noAppIcon4="/no-app-icon@2x.png"
        noAppIcon5="/no-app-icon2@2x.png"
        noAppIcon6="/no-app-icon3@2x.png"
        appName="My Vélo"
        showAppIcon={false}
        modeDarkHeight="100%"
        modeDarkBackgroundImage="url('/home-screen--iphone@3x.png')"
        modeDarkPosition="absolute"
        modeDarkTop="0%"
        modeDarkBottom="0%"
        modeDarkLeft="calc(50% - 196.5px)"
        timeFontWeight="unset"
        timeFontFamily="Helvetica"
        appNameFontFamily="Helvetica"
        appNameFontFamily1="Helvetica"
        appNameFontFamily2="Helvetica"
        appNameFontFamily3="Helvetica"
        appNameFontFamily4="Helvetica"
        appNameFontFamily5="Helvetica"
        appNameFontFamily6="Helvetica"
        appNameFontFamily7="Helvetica"
        appNameFontFamily8="Helvetica"
        appNameFontFamily9="Helvetica"
        appNameFontFamily10="Helvetica"
        appNameFontFamily11="Helvetica"
        appNameFontFamily12="Helvetica"
        appNameFontFamily13="Helvetica"
        appNameFontFamily14="Helvetica"
        dateLeft="33.33%"
        dateFontFamily="Helvetica"
        dayLeft="28.33%"
        dayFontFamily="Helvetica"
        appNameFontFamily15="Helvetica"
        appNameFontFamily16="Helvetica"
        searchFontFamily="Helvetica"
      />
      <div className={styles.frame} onClick={onFrameContainer24Click}>
        <div className={styles.appIcon}>
          <div className={styles.tv} />
        </div>
        <div className={styles.badge} />
        <img className={styles.logomy1Icon} alt="" src="/logomy-1@2x.png" />
      </div>
    </div>
  );
};

export default IPhoneHomeScreenDark;
