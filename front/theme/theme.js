const breakpoints = {
  xs: 620,
  sm: 768,
  md: 960,
  lg: 1280,
  xlg: 1500,
};

export const theme = {
  colors: {
    white: "#FFF",
    black: "#111",
    darkerWhite: "#ffffffcc",
    cyanBlue: "#5bb2fc",
    darkOrange: "#b73d1cbf",
    lightOrange: "#ff3600bf",
    lightRed: "#ff5a5ae6",
    bittersweet: "#ff5a5a",
    lightRed: "#ff5a5ae6",
    crimsonRed: "#dc143c",
    mostlyBlackBlue: "#24272e",
  },
  font: {
    weight: {
      light: 300,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 800,
    },
    size: {
      xxs: "0.8em",
      xs: "1em",
      sm: "1.4em",
      md: "2em",
      lg: "2.5em",
      xlg: "3em",
    },
  },
  boxShadow: {
    light: "rgba(0, 0, 0, 0.6) 2px 2px 8px 0px",
    dark: "0 15px 10px #000",
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),
};
