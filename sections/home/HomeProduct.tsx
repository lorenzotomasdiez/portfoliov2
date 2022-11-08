import { Container, Stack, styled, Typography } from '@mui/material';
import { m } from 'framer-motion';
import React from 'react'
import { MotionViewport, varFade } from '../../components';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const HomeProduct = () => {
  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle>
        <Container>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <m.div variants={varFade().inUp}>
              <Typography
                component="div"
                variant="overline"
                sx={{ mb: 2, color: 'text.disabled' }}
              >
                Complete product
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Your entire interactive web <br />
                With you own admin panel
              </Typography>
            </m.div>
            <m.img              
              variants={varFade().inRight}
              src={`https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_sketch.svg`}
            />
          </Stack>
        </Container>
      </RootStyle>
    </MotionViewport>
  )
}

export default HomeProduct