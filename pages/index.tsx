import { NextPage } from 'next';
import {MainLayout, Page} from '../components';
import { HomeHero } from '../sections';



const Home:NextPage = () => {
  return (
    <MainLayout>
      <Page title={'Home'}>
        <HomeHero />
      </Page>
    </MainLayout>
  )
}

export default Home
