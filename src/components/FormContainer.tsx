import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Calendar from "./Calendar";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  eventTitle?: string;
  showAppName?: boolean;
  showBadge?: boolean;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propFontFamily?: CSSProperties["fontFamily"];
  propLeft1?: CSSProperties["left"];
  propFontFamily1?: CSSProperties["fontFamily"];
  propFontFamily2?: CSSProperties["fontFamily"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  eventTitle = "Calendar",
  showAppName = true,
  showBadge = false,
  propLeft,
  propFontFamily,
  propLeft1,
  propFontFamily1,
  propFontFamily2,
}) => {
  const dateStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      fontFamily: propFontFamily,
    };
  }, [propLeft, propFontFamily]);

  const dayStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      fontFamily: propFontFamily1,
    };
  }, [propLeft1, propFontFamily1]);

  const appName1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: propFontFamily2,
    };
  }, [propFontFamily2]);

  return (
    <div className={styles.row1App2}>
      <div className={styles.frame}>
        <Calendar
          calendarPosition="absolute"
          calendarTop="0px"
          calendarLeft="0px"
          calendarBorderRadius="14px"
          dateLeft="31.67%"
          dateFontFamily="'SF Pro'"
          dayLeft="26.67%"
          dayFontFamily="'SF Pro'"
        />
        {showBadge && (
          <div className={styles.badge}>
            <div className={styles.badge1} />
            <div className={styles.number}>2</div>
          </div>
        )}
      </div>
      {showAppName && (
        <div className={styles.appName} style={appName1Style}>
          {eventTitle}
        </div>
      )}
    </div>
  );
};

export default FormContainer;
