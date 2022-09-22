import { FC, forwardRef } from 'react';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const FullLogo:FC<Props>= ({ disabledLink = false, sx }) => {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const SECONDARY_MAIN = theme.palette.secondary.main;

  const logo = (
    <Box sx={{ width: 222, height: 48, cursor: 'pointer', ...sx }}>
      
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
};

export default FullLogo;
