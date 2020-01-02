/*
    https://github.com/system-ui/theme-specification
 */

import { between } from "polished";

const theme = {
  navHeight: between("32px", "64px"),
  captionWidth: between("110px", "220px"),
  containerSizes: {
    default: "80vw",
    small: "90vw"
  },
  cardSizes: {
    imageHeight: between("200px", "240px")
  },
  fontSizes: {
    h1: between("48px", "80px"),
    h2: "40px",
    h3: "28px",
    h4: "22px",
    h5: "18px",
    h6: "14px",
    statistic: "104px",
    subtitleSmall: between("18px", "22px"),
    subtitleMedium: between("24px", "30px"),
    bodyMedium: between("16px", "18px"),
    bodyLarge: "22px",
    quote: "22px",
    caption: "14px",
    code: between("18px", "20px"),
    buttonMedium: "22px",
    buttonSmall: "16px"
  },
  lineHeights: {
    h1: between("56px", "88px"),
    h2: "48px",
    h3: "32px",
    h4: "24px",
    h5: "20px",
    h6: "16px",
    statistic: "104px",
    subtitleSmall: between("24px", "28px"),
    subtitleMedium: between("32px", "36px"),
    bodyMedium: between("24px", "28px"),
    bodyLarge: "32px",
    quote: "32px",
    caption: "16px",
    code: between("24px", "28px"),
    buttonMedium: "24px",
    buttonSmall: "16px"
  },
  spacings: {
    extraSmall: between("100px", "200px"),
    small: between("60px", "120px"),
    medium: between("40px", "80px"),
    large: between("20px", "40px"),
    extraLarge: between("12px", "24px")
  },
  paddings: [
    between("12px", "24px"),
    between("10px", "20px"),
    between("8px", "16px"),
    between("6px", "12px"),
    between("4px", "8px"),
    between("2px", "4px")
  ],
  borderWidth: {
    default: "2px",
    thick: "4px"
  },
  borderRadii: {
    small: between("4px", "8px"),
    smaller: between("2px", "4px")
  },
  boxShadows: {
    specialCard: "0px 4px 16px rgba(0, 0, 0, 0.16)"
  },
  //This only exists to support old components
  colors: {
    blue: "#0070E0",
    black: "#000",
    lightBlack: "#1F2629",
    lighterBlack: "#3E4B52",
    white: "#fff",
    orange: "#FFB399",
    gray: "rgba(10, 73, 100, 0.1)",
    darkgray: "#5E6366"
  },
  color: {
    light: {
      gray: {
        ten: "#2E332B",
        thirty: "#6C7067",
        fifty: "#BFC2BA",
        seventy: "#EEF0EB",
        ninety: "#FBFCF7"
      },
      red: {
        ten: "#7A2A3A",
        thirty: "#B8374D",
        fifty: "#F54960",
        seventy: "#FFB8BF",
        ninety: "#FFEDEF"
      },
      orange: {
        ten: "#FFEDEF",
        thirty: "#C23B27",
        fifty: "#FA5737",
        seventy: "#FFBDA8",
        ninety: "#FCEBE3"
      },
      yellow: {
        ten: "#7A5F36",
        thirty: "#C29F3E",
        fifty: "#FAE246",
        seventy: "#F7EFA8",
        ninety: "#FCFADE"
      },
      green: {
        ten: "#2D6644",
        thirty: "#37A35B",
        fifty: "#58F582",
        seventy: "#BFF5CC",
        ninety: "#E8FCEC"
      },
      blue: {
        ten: "#286685",
        thirty: "#179AC2",
        fifty: "#47D8FC",
        seventy: "#2E332B",
        ninety: "#E6FCFF"
      }
    },
    dark: {
      gray: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      },
      red: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      },
      orange: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      },
      yellow: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      },
      green: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      },
      blue: {
        ten: "",
        thirty: "",
        fifty: "",
        seventy: "",
        ninety: ""
      }
    }
  },
  backgrounds: {
    gray: "rgba(10, 73, 100, 0.1)",
    orange: "#EF6031",
    white: "#fff"
  },
  breakpoints: {
    small: "40em",
    medium: "52em",
    large: "64em"
  }
};

// Aliases

//Color
theme.color.light.primaryText = theme.color.light.gray.ten;
theme.color.light.secondaryText = theme.color.light.gray.thirty;
theme.color.light.surface = theme.color.light.gray.ninety;
theme.color.light.errorText = theme.color.light.red.thirty;
theme.color.light.errorIcons = theme.color.light.red.fifty;
theme.color.light.navigation = theme.color.light.orange.fifty;
theme.color.light.accent = theme.color.light.yellow.fifty;
theme.color.light.primaryButtons = theme.color.light.green.fifty;
theme.color.light.secondaryButtons = theme.color.light.blue.fifty;

export default theme;
