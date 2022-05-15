// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'components/ui-component/cards/SubCard';
import Avatar from 'components/ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import CategoryIcon from '@mui/icons-material/Category';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
  const theme = useTheme();
  return (
    <Container>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Top Features
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                What BookletZERO brings to you?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                BookletZERO is a solid test management system for your company, with the following top features.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        size="xl"
                        variant="rounded"
                        sx={{
                          background: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.primary.light,
                          color: theme.palette.primary.main
                        }}
                      >
                        <CategoryIcon fontSize="large" />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Question Class Structure</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Each questions has own category to manage easily. These question will pickup later to generate online test or a booklet.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        size="xl"
                        variant="rounded"
                        sx={{
                          background: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.secondary.light,
                          color: theme.palette.secondary.main
                        }}
                      >
                        <QueryStatsIcon fontSize="large" />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Live Statistics</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Technology behind BookletZERO is less complicated so you can focus on creating the actual online tests and booklets.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        size="xl"
                        variant="rounded"
                        sx={{
                          background: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.success.light,
                          color: theme.palette.success.dark
                        }}
                      >
                        <AccountTreeIcon fontSize="large" />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Multi Level Management</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Each department has their own question class that manage by themselves.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturePage;
