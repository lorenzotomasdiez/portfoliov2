import { Box, Container, Stack, styled, Typography } from '@mui/material';
import { m } from 'framer-motion';
import React from 'react'
import { Image, MotionViewport, varFade } from '../../components';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const HomeProduct = () => {
  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle>
        <Container>
          <Stack spacing={2} justifyContent="center" alignItems="center" textAlign="center">
            <m.div variants={varFade().inUp}>
              <Typography
                component="div"
                variant="overline"
                sx={{ mb: 2, color: 'text.disabled' }}
              >
                Complete product
              </Typography>
            </m.div>
            <m.div variants={varFade().inLeft}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Your entire interactive web app <br />
                With your own admin panel
              </Typography>
            </m.div>
            
            <Box maxWidth="550px" minHeight="400px" position="relative" margin="auto">                
              <m.div animate={{ y: [-5, 20, -5] }} transition={{ duration: 8, repeat: Infinity }}>
                <Image
                  disabledEffect
                  alt="sidebar"
                  src={`/images/dashboard-one.jpeg`}
                  sx={(theme) => ({width:"90%", maxWidth:"550px", boxShadow:theme.customShadows.z24})}
                />
              </m.div>
            </Box>
            
            <m.div variants={varFade().inUp}>
              <Typography
                component="p"
                variant="h4"
                sx={{ mb: 2, color: 'secondary.darker'}}
              >
                Stop using {" "}
                <Typography variant="h4" component="span" sx={{ mb: 2, color: 'secondary.darker', textDecoration:'line-through'}}>
                  non-customizable websites
                </Typography>
              </Typography>
            </m.div>
            
          </Stack>
        </Container>
      </RootStyle>
    </MotionViewport>
  )
}

export default HomeProduct