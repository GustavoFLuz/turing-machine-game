export const theme = {
  border: {
    radius: '0.4em',
  },
  font: {
    family:
      "Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxsmall: '0.8rem',
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  colors: {
    text: "#393638",
    white: "#f0f0f0",
    green: "#3daf68",
    red: "#e74c3c",
    lightBlue: "#58b3da",
    yellow: "#f7b916",
    purple: "#7c66ab",

    lightGray: "#d3d3d3",
    gray: "#7d7d7d",
    darkGray: "#353736",
    
    background: {
      paper: "#f5f5f5",
      default: "#fff",
    },
    card: {
      background: {
        blue1: "#001a32",
        blue2: "#0b3448",
      }
    },
  },
  components: {
    selector: {
      arrowSize: "150px"
    }
  },
} as const;
