import { Container, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import {FullLogo, SocialsButton} from '../../../../components';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export const CompoundFooter = () => {

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 3 }}>
        <SocialsButton sx={{ mx: 0.5 }} />
         

        <Typography
          component="p"
          variant="overline"
          sx={{
            mt:2,
            pb: 5,
            fontSize: 10,
            textAlign: 'center',
          }}
        >
          All Rights Reserved | Copyright © 2022
          <br/>
          Lorenzo Tomas Diez | Software Engineer
        </Typography>
      </Container>
    </RootStyle>
  );
}