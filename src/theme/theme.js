import { createTheme, experimental_extendTheme as extendTheme } from "@mui/material";
import useSettings from "../hooks/useSettings";
import { useContext } from "react";
import { SettingContext } from "../contexts/settingsContext";

// const {themeMode} = useContext(SettingContext)



const theme = extendTheme({
    
    palette:{
      primary: {
        main: '#5c0099'
      }
    },
    // mode: themeMode
  });


export default theme