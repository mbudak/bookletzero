// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import CallSplitTwoToneIcon from '@mui/icons-material/CallSplitTwoTone';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PrintIcon from '@mui/icons-material/Print';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const KeyFeaturePage = () => {
  const theme = useTheme();
  const avatarIconSx = {
    ...theme.typography.commonAvatar,
    cursor: 'initial',
    width: 72,
    height: 72
  };

  return (
    <Container>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Key Features
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                Know more about BookletZERO
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                If you&apos;re in need of a test manager app that is both user-friendly and scalable, this is for you.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                          color: theme.palette.primary.main
                        }}
                      >
                        <FolderTwoToneIcon />
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">Easy Folder Structure</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                          color: theme.palette.secondary.main
                        }}
                      >
                        <GroupsIcon />
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">Organized Your Teams</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                          color: theme.palette.primary.main
                        }}
                      >
                        <EmojiEmotionsTwoToneIcon />
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">The Hassle-free Question Accept Process</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                          color: theme.palette.secondary.main
                        }}
                      >
                        <FactCheckIcon />
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">Generate tests with a template, easily</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                          color: theme.palette.secondary.main
                        }}
                      >
                        <PrintIcon/>
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">Printable Test Booklets</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item lg={3} md={4} xs={12} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...avatarIconSx,
                          bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                          color: theme.palette.secondary.main
                        }}
                      >
                        <ScreenSearchDesktopIcon/>
                      </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="h5">Online Tests</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            


            
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item>
              <AnimateButton>
                <Button
                  component={Link}
                  href="#"
                  target="_blank"
                  variant="contained"
                >
                  Get BookletZERO
                </Button>
              </AnimateButton>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KeyFeaturePage;
