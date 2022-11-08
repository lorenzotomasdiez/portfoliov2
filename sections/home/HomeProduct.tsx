import { styled } from '@mui/material';
import { m } from 'framer-motion';
import React from 'react'

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const HomeProduct = () => {
  return (
    <RootStyle>
      
    </RootStyle>
  )
}

export default HomeProduct