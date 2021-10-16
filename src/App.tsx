import React from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography
} from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
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

function MediaButton({text, icon, href="#"}: {text: string; icon: JSX.Element; href?: string}) {
  return (
    <Button
      variant="outlined"
      color="warning"
      sx={{margin: "8px"}}
      startIcon={icon}
      href={href}
    >
      {text}
    </Button>
  )
}

function App() {
  const classes = useStyles();
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
              <MediaButton text="Instagram" icon={<InstagramIcon />} />
              <MediaButton text="Twitter" icon={<TwitterIcon />} />
              <MediaButton text="Facebook" icon={<FacebookIcon />} />
              <MediaButton text="TikTok" icon={<></>} />
              <MediaButton text="VK" icon={<></>} />
              <MediaButton text="YouTube" icon={<YouTubeIcon />} />
              <MediaButton text="GitHub" icon={<GitHubIcon />} />
              <MediaButton text="LinkedIn" icon={<LinkedInIcon />} />
            </Box>

            <Box className={classes.block}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ways to contact</Typography>
              <MediaButton text="Telegram" icon={<TelegramIcon />} />
              <MediaButton text="Mail" icon={<AlternateEmailIcon />} />
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
    </ThemeProvider>
  );
}

export default App;
