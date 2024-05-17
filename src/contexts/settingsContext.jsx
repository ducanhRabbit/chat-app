import { createContext, useState } from "react"

const initialState = {
    themeMode: 'light',
    onToggleMode: () => {}
}

const SettingContext = createContext(initialState)

const SettingsProvider = ({ children }) => {
    const [mode, setMode] = useState(initialState.themeMode)

    const onToggleMode = () => {
        setMode((prev)=>{
            return prev === 'light'?'dark':'light'
        })
    }

    return <SettingContext.Provider value={{
        themeMode:mode,
        onToggleMode
    }}>{children}</SettingContext.Provider>
}

export {SettingContext}

export default SettingsProvider