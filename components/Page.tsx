import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = React.forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | TCODE`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.displayName = "Page"

export default Page;
