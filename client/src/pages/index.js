// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Feature from 'components/landingpage/Feature';
import Demos from 'components/landingpage/Demos';
import Layouts from 'components/landingpage/Layouts';
import KeyFeature from 'components/landingpage/KeyFeature';
import Subscribe from 'components/landingpage/Subscribe';
import Footer from 'components/landingpage/Footer';

import AppBar from 'components/ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <>
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <SecondWrapper>
      <Feature />
    </SecondWrapper>
    <SecondWrapper>
      <Demos />
    </SecondWrapper>
    <SecondWrapper>
      <KeyFeature />
    </SecondWrapper>
    <SecondWrapper>
      <Subscribe />
    </SecondWrapper>
    <Footer />
    
  </>
);

export default Landing;
