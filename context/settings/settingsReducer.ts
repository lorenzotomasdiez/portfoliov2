import {SettingsState} from './';


type SettingsActionType = 
| { type: '[Settings] - Toggle Mode' }
| { type: '[Settings] - Set Mode', payload:'light' | 'dark'}
| { type: '[Settings] - Reset'}

export const settingsReducer = (state: SettingsState, action: SettingsActionType ):SettingsState => {

  switch(action.type) {

    case '[Settings] - Set Mode':
      return{
        ...state,
        themeMode:action.payload
      }
    
    case '[Settings] - Toggle Mode':
      return{
        ...state,
        themeMode: state.themeMode === 'light' ? 'dark' : 'light'
      }

    case '[Settings] - Reset':
      return{
        ...state,
        themeMode: 'light' 
      }

    default:
      return state;
  }

}
