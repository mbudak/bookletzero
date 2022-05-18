import Image from 'next/image';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Subscribe from './Subscribe';

const logoDark = '/assets/images/logo-dark.svg';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#000',
  background: '#e9ecef',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const FooterLink = styled(Link)({
  color: '#000',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  }
});

const MenuSeparator = styled('span')({
  
  color: '#6c757d',
  fontSize: '1.2em',
  padding: '0 6px',
  '::before': {
    content: "'|'"
  }

})


const FooterSubWrapper = styled('div')(({ theme }) => ({
  borderTop: '1px solid #adb5bd',
  padding: '10px 0',
  color: '#000',
  background: '#e9ecef',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  const theme = useTheme();
  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12} sm={5}>
            
            
                <Image src={logoDark} alt="BookletZERO Dark Logo" width={100} height={34} layout="intrinsic" />
            
            
                <p>BookletZERO is an Open Source Test Manager that generates tests online or in printable</p>
            
                <Grid
                container
                alignItems="center"
                spacing={gridSpacing}
                sx={{ justifyContent: 'flex-start', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}
              >
                
                <Grid item>
                  <FooterLink href="https://www.facebook.com/bookletzero" target="_blank" underline="hover">
                    <FacebookIcon />
                    Facebook
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="https://twitter.com/bookletzero" target="_blank" underline="hover">
                    <TwitterIcon />
                    Twitter
                  </FooterLink>
                </Grid>
                
              </Grid>
            </Grid>
            
            <Grid item xs={12} sm={7}>
              <Subscribe/>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      
      <FooterSubWrapper>
        <Container>
          <Typography variant="subtitle1" component="div" color="inherit">
            &#169; <FooterLink href="https://havagram.com" target="_blank" underline="hover">Havagram</FooterLink>
          </Typography>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12} sm={4}>
              <FooterLink href="/legal/PrivacyPolicy" target="_self" underline="hover">Privacy Policy</FooterLink> <MenuSeparator />
              <FooterLink href="/legal/UseOfCookies" target="_self" underline="hover">Use of Cookies</FooterLink> <MenuSeparator />
              <FooterLink href="/legal/TermsOfUse" target="_self" underline="hover">Terms of Use</FooterLink> 
            </Grid>
          </Grid>
        </Container>
      </FooterSubWrapper>
    </>
  );
};

export default FooterPage;
