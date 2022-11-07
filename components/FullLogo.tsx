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

  const logo = (
    <Box sx={{ width: 222, height: 48, cursor: 'pointer', ...sx}}>
       <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="220px" height="105px" viewBox="0 0 410 180"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)"
        fill={PRIMARY_MAIN} stroke="none">
          <path
            
            d="M1566 1108 c-24 -7 -56 -28 -82 -53 -100 -100 -75 -273 49 -341 42
            -23 58 -26 117 -22 54 3 75 9 109 33 39 26 71 69 71 95 0 5 -20 10 -44 10 -36
            0 -50 -6 -74 -30 -62 -62 -168 -28 -192 62 -25 91 32 178 117 178 29 0 72 -23
            86 -47 8 -13 107 -20 107 -8 0 17 -33 66 -60 88 -52 44 -123 56 -204 35z"
          />
          <path 
            
            d="M2030 1109 c-150 -45 -198 -256 -81 -362 49 -45 98 -60 172 -55 74 5
            132 43 166 108 21 38 24 56 21 116 -4 84 -34 137 -98 173 -47 26 -129 35 -180
            20z m124 -84 c43 -20 66 -63 66 -120 0 -86 -47 -135 -129 -135 -123 0 -163
            195 -52 255 34 19 75 19 115 0z"
          />
          <path 
            
            d="M1070 1075 l0 -35 55 0 55 0 0 -175 0 -175 45 0 45 0 0 175 0 175 55
            0 55 0 0 35 0 35 -155 0 -155 0 0 -35z"
          />
          <path 
            
            d="M2370 900 l0 -210 85 0 c46 0 106 5 133 10 59 13 117 58 138 108 23
            54 20 143 -5 195 -40 82 -98 107 -247 107 l-104 0 0 -210z m214 125 c44 -21
            68 -66 68 -127 0 -85 -46 -128 -139 -128 l-53 0 0 135 0 135 46 0 c25 0 60 -7
            78 -15z"
          />
          <path 
            
            d="M2800 900 l0 -210 125 0 125 0 0 35 0 34 -77 3 -78 3 -3 53 -3 52 70
            0 71 0 0 35 0 35 -70 0 -70 0 0 50 0 50 80 0 80 0 0 35 0 35 -125 0 -125 0 0
            -210z"
          />
          <path 
            
            d="M839 973 c-32 -31 -59 -63 -59 -72 0 -19 109 -131 128 -131 33 0 23
            33 -24 81 l-48 49 48 49 c32 33 47 55 43 65 -10 26 -25 19 -88 -41z"
          />
          <path 
            
            d="M3213 1014 c-4 -10 11 -32 43 -65 l48 -49 -48 -49 c-32 -33 -47 -55
            -43 -65 4 -9 11 -16 17 -16 19 0 130 112 130 130 0 18 -111 130 -130 130 -6 0
            -13 -7 -17 -16z"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
};

export default FullLogo;
