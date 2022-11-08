import { Divider, Stack, Typography, styled } from '@mui/material';
import {SocialsButton} from '../../../../components';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export const CompoundFooter = () => {

  return (
    <RootStyle>
      <Divider />
      <Stack sx={{ pt: 3, alignItems:'center' }}>
        <SocialsButton sx={{ mx: 1 }} />
        <Typography
          component="p"
          variant="overline"
          sx={{
            mt:2,
            pb: 5,
            textAlign: 'center',
          }}
        >
          All Rights Reserved | Copyright © 2022
          <br/>
          Lorenzo Tomas Diez | Software Engineer
        </Typography>
      </Stack>
    </RootStyle>
  );
}