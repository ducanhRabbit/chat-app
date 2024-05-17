import { useContext } from 'react';
import {SettingContext} from '../contexts/settingsContext'

// ----------------------------------------------------------------------
console.log(SettingContext)
const useSettings = () => useContext(SettingContext);

export default useSettings;