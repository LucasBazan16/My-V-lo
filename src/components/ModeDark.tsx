import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FilteredForm from "./FilteredForm";
import AppIcon from "./AppIcon";
import FormContainer from "./FormContainer";
import Footer from "./Footer";
import styles from "./ModeDark.module.css";

type ModeDarkType = {
  noAppIcon?: string;
  noAppIcon1?: string;
  noAppIcon2?: string;
  noAppIcon3?: string;
  noAppIcon4?: string;
  noAppIcon5?: string;
  noAppIcon6?: string;
  appName?: string;
  showAppIcon?: boolean;

  /** Style props */
  modeDarkHeight?: CSSProperties["height"];
  modeDarkBackgroundImage?: CSSProperties["backgroundImage"];
  modeDarkPosition?: CSSProperties["position"];
  modeDarkTop?: CSSProperties["top"];
  modeDarkBottom?: CSSProperties["bottom"];
  modeDarkLeft?: CSSProperties["left"];
  timeFontWeight?: CSSProperties["fontWeight"];
  timeFontFamily?: CSSProperties["fontFamily"];
  appNameFontFamily?: CSSProperties["fontFamily"];
  appNameFontFamily1?: CSSProperties["fontFamily"];
  appNameFontFamily2?: CSSProperties["fontFamily"];
  appNameFontFamily3?: CSSProperties["fontFamily"];
  appNameFontFamily4?: CSSProperties["fontFamily"];
  appNameFontFamily5?: CSSProperties["fontFamily"];
  appNameFontFamily6?: CSSProperties["fontFamily"];
  appNameFontFamily7?: CSSProperties["fontFamily"];
  appNameFontFamily8?: CSSProperties["fontFamily"];
  appNameFontFamily9?: CSSProperties["fontFamily"];
  appNameFontFamily10?: CSSProperties["fontFamily"];
  appNameFontFamily11?: CSSProperties["fontFamily"];
  appNameFontFamily12?: CSSProperties["fontFamily"];
  appNameFontFamily13?: CSSProperties["fontFamily"];
  appNameFontFamily14?: CSSProperties["fontFamily"];
  dateLeft?: CSSProperties["left"];
  dateFontFamily?: CSSProperties["fontFamily"];
  dayLeft?: CSSProperties["left"];
  dayFontFamily?: CSSProperties["fontFamily"];
  appNameFontFamily15?: CSSProperties["fontFamily"];
  appNameFontFamily16?: CSSProperties["fontFamily"];
  searchFontFamily?: CSSProperties["fontFamily"];
};

const ModeDark: FunctionComponent<ModeDarkType> = ({
  noAppIcon,
  noAppIcon1,
  noAppIcon2,
  noAppIcon3,
  noAppIcon4,
  noAppIcon5,
  noAppIcon6,
  appName,
  showAppIcon,
  modeDarkHeight,
  modeDarkBackgroundImage,
  modeDarkPosition,
  modeDarkTop,
  modeDarkBottom,
  modeDarkLeft,
  timeFontWeight,
  timeFontFamily,
  appNameFontFamily,
  appNameFontFamily1,
  appNameFontFamily2,
  appNameFontFamily3,
  appNameFontFamily4,
  appNameFontFamily5,
  appNameFontFamily6,
  appNameFontFamily7,
  appNameFontFamily8,
  appNameFontFamily9,
  appNameFontFamily10,
  appNameFontFamily11,
  appNameFontFamily12,
  appNameFontFamily13,
  appNameFontFamily14,
  dateLeft,
  dateFontFamily,
  dayLeft,
  dayFontFamily,
  appNameFontFamily15,
  appNameFontFamily16,
  searchFontFamily,
}) => {
  const modeDarkStyle: CSSProperties = useMemo(() => {
    return {
      height: modeDarkHeight,
      backgroundImage: modeDarkBackgroundImage,
      position: modeDarkPosition,
      top: modeDarkTop,
      bottom: modeDarkBottom,
      left: modeDarkLeft,
    };
  }, [
    modeDarkHeight,
    modeDarkBackgroundImage,
    modeDarkPosition,
    modeDarkTop,
    modeDarkBottom,
    modeDarkLeft,
  ]);

  const timeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: timeFontWeight,
      fontFamily: timeFontFamily,
    };
  }, [timeFontWeight, timeFontFamily]);

  const appNameStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily,
    };
  }, [appNameFontFamily]);

  const appNameStyle1: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily1,
    };
  }, [appNameFontFamily1]);

  const appNameStyle2: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily2,
    };
  }, [appNameFontFamily2]);

  const appNameStyle3: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily3,
    };
  }, [appNameFontFamily3]);

  const appNameStyle4: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily4,
    };
  }, [appNameFontFamily4]);

  const appNameStyle5: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily5,
    };
  }, [appNameFontFamily5]);

  const appNameStyle6: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily6,
    };
  }, [appNameFontFamily6]);

  const appNameStyle7: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily7,
    };
  }, [appNameFontFamily7]);

  const appNameStyle8: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily8,
    };
  }, [appNameFontFamily8]);

  const appNameStyle9: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily9,
    };
  }, [appNameFontFamily9]);

  const appNameStyle10: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily10,
    };
  }, [appNameFontFamily10]);

  const appNameStyle11: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily11,
    };
  }, [appNameFontFamily11]);

  const appNameStyle12: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily12,
    };
  }, [appNameFontFamily12]);

  const appNameStyle13: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily13,
    };
  }, [appNameFontFamily13]);

  const appNameStyle14: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily14,
    };
  }, [appNameFontFamily14]);

  const dateStyle: CSSProperties = useMemo(() => {
    return {
      left: dateLeft,
      fontFamily: dateFontFamily,
    };
  }, [dateLeft, dateFontFamily]);

  const dayStyle: CSSProperties = useMemo(() => {
    return {
      left: dayLeft,
      fontFamily: dayFontFamily,
    };
  }, [dayLeft, dayFontFamily]);

  const appName1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily15,
    };
  }, [appNameFontFamily15]);

  const appNameStyle15: CSSProperties = useMemo(() => {
    return {
      fontFamily: appNameFontFamily16,
    };
  }, [appNameFontFamily16]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: searchFontFamily,
    };
  }, [searchFontFamily]);

  return (
    <div className={styles.modedark} style={modeDarkStyle}>
      <div className={styles.statusBar}>
        <div className={styles.time}>
          <div className={styles.time1} style={timeStyle}>
            9:41
          </div>
        </div>
        <img className={styles.levelsIcon} alt="" src="/levels.svg" />
      </div>
      <div className={styles.appIcons}>
        <FilteredForm
          appIconUrl="/no-app-icon1@2x.png"
          appNameImageUrl="App Name"
          appIconAltText="/no-app-icon1@2x.png"
          appIconAltText2="App Name"
          appIconImageUrl="/no-app-icon1@2x.png"
          appIconAltText3="App Name"
          appIconImageUrl2="/no-app-icon1@2x.png"
          appIconAltText4="App Name"
          row6={false}
          showRow6App4
          showRow6App3
          showRow6App2
        />
        <FilteredForm
          appIconUrl="/no-app-icon1@2x.png"
          appNameImageUrl="App Name"
          appIconAltText="/no-app-icon1@2x.png"
          appIconAltText2="App Name"
          appIconImageUrl="/no-app-icon1@2x.png"
          appIconAltText3="App Name"
          appIconImageUrl2="/no-app-icon@2x.png"
          appIconAltText4="App Name"
          row6
          showRow6App4={false}
          showRow6App3={false}
          showRow6App2={false}
          badgeTop="418px"
        />
        <FilteredForm
          appIconUrl="/settings@2x.png"
          appNameImageUrl="Settings"
          appIconAltText="/wallet@2x.png"
          appIconAltText2="Wallet"
          appIconImageUrl="/health@2x.png"
          appIconAltText3="Health"
          appIconImageUrl2="/maps@2x.png"
          appIconAltText4="Maps"
          row6
          showRow6App4
          showRow6App3
          showRow6App2
          badgeTop="320px"
        />
        <FilteredForm
          appIconUrl="/app-store@2x.png"
          appNameImageUrl="App Store"
          appIconAltText="/podcasts@2x.png"
          appIconAltText2="Podcasts"
          appIconImageUrl="/tv@2x.png"
          appIconAltText3="TV"
          appIconImageUrl2="/news@2x.png"
          appIconAltText4="News"
          row6
          showRow6App4
          showRow6App3
          showRow6App2
          badgeTop="222px"
        />
        <FilteredForm
          appIconUrl="/clock@2x.png"
          appNameImageUrl="Clock"
          appIconAltText="/reminders@2x.png"
          appIconAltText2="Reminders"
          appIconImageUrl="/notes@2x.png"
          appIconAltText3="Notes"
          appIconImageUrl2="/mail@2x.png"
          appIconAltText4="Mail"
          row6
          showRow6App4
          showRow6App3
          showRow6App2
          badgeTop="124px"
        />
        <div className={styles.row1}>
          <AppIcon
            noAppIcon="/camera@2x.png"
            appName="Camera"
            showAppName
            showBadge={false}
            showAppIcon
            appIconPosition="absolute"
            appIconTop="0px"
            appIconLeft="271px"
            appNameFontFamily="'SF Pro'"
          />
          <AppIcon
            noAppIcon="/photos@2x.png"
            appName="Photos"
            showAppName
            showBadge={false}
            showAppIcon
            appIconPosition="absolute"
            appIconTop="0px"
            appIconLeft="180.7px"
            appNameFontFamily="'SF Pro'"
          />
          <FormContainer eventTitle="Calendar" showAppName showBadge={false} />
          <AppIcon
            noAppIcon="/facetime@2x.png"
            appName="FaceTime"
            showAppName
            showBadge={false}
            showAppIcon
            appIconPosition="absolute"
            appIconTop="0px"
            appIconLeft="0px"
            appNameFontFamily="'SF Pro'"
          />
        </div>
      </div>
      <div className={styles.searchField}>
        <div className={styles.search} style={searchStyle}>
          􀊫 Search
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModeDark;
