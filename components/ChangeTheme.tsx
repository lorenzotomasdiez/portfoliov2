import { Button } from '@mui/material';
import { FC } from 'react';
import { useSettings } from '../hooks';
import Iconify from './Iconify';

interface Props{
  color?          :string;
  isOffset?       :boolean;
}

const ChangeTheme:FC<Props> = ({color, isOffset}) => {
  const {themeMode, onToggleMode} = useSettings()
  const isLight = themeMode === 'light';
  let currenteColor:string;
  if(!color){
      currenteColor = isOffset && isLight ? 'common.black' : 'common.white';
  }else{
      currenteColor = color;
  }
  return(
  <>
    <Button onClick={onToggleMode}>
      <Iconify
        icon={!isLight ? 'ph:sun-duotone' : 'ph:moon-duotone'}
        width={28}
        height={28}
        color={currenteColor}
      />
    </Button>
  </>
)};

export default ChangeTheme;