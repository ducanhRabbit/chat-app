import { createTheme, experimental_extendTheme as extendTheme } from "@mui/material";

const defaultTheme = createTheme()

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {

        primary: {
          main: '#5c0099'
        },
        salmon:{
          main: '#5c0099'
        }
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#b0b1b4',
            borderRadius: '8px'
          }
        }
      }
    },
  }
  // mode: themeMode
})


export default theme