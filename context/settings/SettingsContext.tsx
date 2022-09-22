import {createContext} from 'react'; 
import { ColorVariants, defaultSettings } from '../../config';

export type ThemeMode = 'light' | 'dark';

export type ContextProps = {
    themeMode           :ThemeMode;
    // Mode
    onToggleMode        :VoidFunction;
    setMode             :(mode: 'light' | 'dark') => void;
  
    // Reset
    onResetSetting: VoidFunction;
  };

export const SettingsContext = createContext({} as ContextProps);

