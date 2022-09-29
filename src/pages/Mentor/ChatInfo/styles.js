import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  () => ({
    infoContainer: {
      boxSizing: "border-box",
      width: "384px",
      background: "#F5F5F5",
      padding: "32px",
    },

    //Title, Subtitle and Avatar
    header: {
      height: "25%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    title: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      lineHeight: "27px !important",
      marginTop: "16px !important",
    },

    subtitleWrapper: {
      display: "flex",
      alignItems: "center",
      marginTop: "4px",
    },
    subtitle: {
      fontSize: "14px !important",
      fontWeight: "400 !important",
      color: "#6D6D6D",
      lineHeight: "21px !important",
      textAlign: "center",
    },
    dot: {
      width: "4px !important",
      height: "4px !important",
      margin: "0 8px",
      color: "#6D6D6D",
    },
  }),
  { index: 1 }
);

export default useStyles;
