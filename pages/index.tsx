import { styled } from '@mui/material';
import { NextPage } from 'next';
import {MainLayout, Page} from '../components';
import { HomeHero, HomeProduct } from '../sections';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));


const Home:NextPage = () => {
  return (
    <MainLayout>
      <Page title={'Home'}>
        <HomeHero />
        <ContentStyle>
          <HomeProduct />
        </ContentStyle>
      </Page>
    </MainLayout>
  )
}

export default Home
