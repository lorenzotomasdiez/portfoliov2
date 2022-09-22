import { ReactNode } from "react";
import { useRouter } from 'next/router';
import {Box, Stack} from "@mui/material";
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

interface Props{
  children:ReactNode
}

export default function MainLayout({ children }: Props) {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}
