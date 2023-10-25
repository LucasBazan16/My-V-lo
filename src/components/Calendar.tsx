import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Calendar.module.css";

type CalendarType = {
  /** Style props */
  calendarPosition?: CSSProperties["position"];
  calendarTop?: CSSProperties["top"];
  calendarLeft?: CSSProperties["left"];
  calendarBorderRadius?: CSSProperties["borderRadius"];
  dateLeft?: CSSProperties["left"];
  dateFontFamily?: CSSProperties["fontFamily"];
  dayLeft?: CSSProperties["left"];
  dayFontFamily?: CSSProperties["fontFamily"];
};

const Calendar: FunctionComponent<CalendarType> = ({
  calendarPosition,
  calendarTop,
  calendarLeft,
  calendarBorderRadius,
  dateLeft,
  dateFontFamily,
  dayLeft,
  dayFontFamily,
}) => {
  const calendarStyle: CSSProperties = useMemo(() => {
    return {
      position: calendarPosition,
      top: calendarTop,
      left: calendarLeft,
      borderRadius: calendarBorderRadius,
    };
  }, [calendarPosition, calendarTop, calendarLeft, calendarBorderRadius]);

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

  return (
    <div className={styles.calendar} style={calendarStyle}>
      <div className={styles.date} style={dateStyle}>
        6
      </div>
      <b className={styles.day} style={dayStyle}>
        MON
      </b>
    </div>
  );
};

export default Calendar;
