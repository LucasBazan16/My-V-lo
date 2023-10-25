import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AppIcon from "./AppIcon";
import styles from "./FilteredForm.module.css";

type FilteredFormType = {
  appIconUrl?: string;
  appNameImageUrl?: string;
  appIconAltText?: string;
  appIconAltText2?: string;
  appIconImageUrl?: string;
  appIconAltText3?: string;
  appIconImageUrl2?: string;
  appIconAltText4?: string;
  row6?: boolean;
  showRow6App4?: boolean;
  showRow6App3?: boolean;
  showRow6App2?: boolean;

  /** Style props */
  badgeTop?: CSSProperties["top"];
};

const FilteredForm: FunctionComponent<FilteredFormType> = ({
  appIconUrl,
  appNameImageUrl,
  appIconAltText,
  appIconAltText2,
  appIconImageUrl,
  appIconAltText3,
  appIconImageUrl2,
  appIconAltText4,
  row6,
  showRow6App4,
  showRow6App3,
  showRow6App2,
  badgeTop,
}) => {
  const row6Style: CSSProperties = useMemo(() => {
    return {
      top: badgeTop,
    };
  }, [badgeTop]);

  return (
    !row6 && (
      <div className={styles.row6} style={row6Style}>
        <AppIcon
          noAppIcon="/no-app-icon1@2x.png"
          appName="App Name"
          showAppName
          showBadge={false}
          showAppIcon
          appIconPosition="absolute"
          appIconTop="0px"
          appIconLeft="271px"
          appNameFontFamily="'SF Pro'"
        />
        <AppIcon
          noAppIcon="/no-app-icon1@2x.png"
          appName="App Name"
          showAppName
          showBadge={false}
          showAppIcon
          appIconPosition="absolute"
          appIconTop="0px"
          appIconLeft="180.7px"
          appNameFontFamily="'SF Pro'"
        />
        <AppIcon
          noAppIcon="/no-app-icon1@2x.png"
          appName="App Name"
          showAppName
          showBadge={false}
          showAppIcon
          appIconPosition="absolute"
          appIconTop="0px"
          appIconLeft="90.3px"
          appNameFontFamily="'SF Pro'"
        />
        <AppIcon
          noAppIcon="/no-app-icon1@2x.png"
          appName="App Name"
          showAppName
          showBadge={false}
          showAppIcon
          appIconPosition="absolute"
          appIconTop="0px"
          appIconLeft="0px"
          appNameFontFamily="'SF Pro'"
        />
      </div>
    )
  );
};

export default FilteredForm;
