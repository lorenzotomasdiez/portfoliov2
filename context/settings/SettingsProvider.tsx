import { FC, ReactNode, useEffect, useReducer} from 'react';
import { defaultSettings } from '../../config';
import { SettingsContext, settingsReducer, ThemeMode, SettingsValueProps} from './';


export interface SettingsState{
  themeMode     :ThemeMode;
}

const SETTINGS_INITIAL_STATE: SettingsValueProps = {
    ...defaultSettings
}

interface Props{
    children?: ReactNode,
    defaultSettings:SettingsValueProps;
}

export const SettingsProvider:FC<Props> = ({children, defaultSettings}) => {
    const [state, dispatch] = useReducer(settingsReducer,SETTINGS_INITIAL_STATE);
    
    const onToggleMode = () => {
      dispatch({type:'[Settings] - Toggle Mode'})
    };
    
    const setMode = (mode:ThemeMode) => {
      dispatch({type:'[Settings] - Set Mode', payload:mode})
    };
    
      // Reset
    
    const onResetSetting = () => {
      dispatch({type:'[Settings] - Reset'})
    };
    

    return (
        <SettingsContext.Provider value={{
            ...state,
            // Mode
            onToggleMode,
            setMode,

            // Reset
            onResetSetting,
        }}>
             { children}
        </SettingsContext.Provider>
    )
};
