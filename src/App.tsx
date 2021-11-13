import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Box,
  Button,
  Container,
  Snackbar,
  Paper,
  Typography
} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { ReactComponent as TikTokIcon } from './tiktok.svg'
import { ReactComponent as VKIcon } from './vk.svg'
import { ReactComponent as SignalIcon } from './signal.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const useStyles = makeStyles({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    padding: "32px 0px 116px",  // 84 + 32 = 116
    display: 'flex',
    maxWidth: '768px',
    minHeight: '100vh',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  footer: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  block: {
    paddingTop: "16px"
  }
})

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MediaButton({text, icon, ...props}: {text: string, icon: JSX.Element, href?: string, onClick?: () => void}) {
  return (
    <Button
      variant="outlined"
      color="warning"
      sx={{margin: "8px"}}
      startIcon={icon}
      {...props}
    >
      {text}
    </Button>
  )
}

function App() {
  const classes = useStyles();

  const [openSignalAlert, setOpenSignalAlert] = React.useState(false);
  const handleCloseSignalAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSignalAlert(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <Container>
          <Paper sx={{padding: "24px 8px"}}>
            <Avatar
              src={process.env.PUBLIC_URL + '/me.png'}
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                width: 96,
                height: 96
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'light' }}>Vladimir Alinsky</Typography>

            <Box className={classes.block}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Social medias</Typography>
              <MediaButton text="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/sky.alin/" />
              <MediaButton text="Twitter" icon={<TwitterIcon />} href="https://twitter.com/AlinskyVladimir" />
              <MediaButton text="VK" icon={<VKIcon fill="#ffa726" />} href="https://vk.com/voavnix" />
              <MediaButton
                text="TikTok"
                icon={<TikTokIcon fill="#ffa726" width="1em" height="1em" />}
                href="https://vm.tiktok.com/ZSJe8DYu6/"
              />
              <MediaButton text="Facebook" icon={<FacebookIcon />} href="https://www.facebook.com/vladimir.alinsky" />
            </Box>

            <Box className={classes.block}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Professional</Typography>
              <MediaButton text="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/alinsky/" />
              <MediaButton text="GitHub" icon={<GitHubIcon />} href="https://github.com/SKY-ALIN" />
            </Box>

            <Box className={classes.block}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ways to contact</Typography>

              <MediaButton text="Telegram" icon={<TelegramIcon />} href="https://t.me/sky_alin" />
              <MediaButton
                text="Signal"
                icon={<SignalIcon fill="#ffa726" width="1em" height="1em" />}
                onClick={() => setOpenSignalAlert(true)}
              />
              <MediaButton text="Mail" icon={<AlternateEmailIcon />} href="mailto:vladimir@alinsky.tech" />
            </Box>
          </Paper>

        </Container>

        <Paper className={classes.footer} sx={{padding: "24px 16px"}}>
          <Box sx={{maxWidth: '768px', marginRight: "auto", marginLeft: "auto"}}>
            <Typography sx={{float: "left"}}>Personal webpage</Typography>
            <Button variant="outlined" sx={{float: "right"}} disabled>Login</Button>
          </Box>
        </Paper>
      </div>

      <Snackbar
        open={openSignalAlert}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleCloseSignalAlert}
      >
        <Alert severity="warning" sx={{ width: '100%' }} onClose={handleCloseSignalAlert}>
          Available upon personal request only
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
