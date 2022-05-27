import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Divider,
  ButtonGroup,
  Collapse
} from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';

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

const maxWidth = '450px';

const useStyles = makeStyles({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    padding: "32px 0px 96px",  // 64 + 32 = 96
    display: 'flex',
    maxWidth: maxWidth,
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  footer: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  paper: {
    margin: "24px 16px",
    padding: "24px 8px",
  },
  block: {
    paddingTop: "16px"
  },
  "@keyframes pulseAnimation": {
    "0%": {
      boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.2)"
    },
    "50%": {
      boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.2)"
    },
    "100%": {
      boxShadow: "0 0 0 20px rgba(255, 255, 255, 0)"
    },
  },
  pulse: {
    animation: "$pulseAnimation 5s infinite"
  }
})

function MediaButton({text, icon, ...props}: {text: string, icon: JSX.Element, href?: string, onClick?: () => void}) {
  return (
    <Button
      variant="text"
      size="small"
      sx={{margin: "8px"}}
      startIcon={icon}
      {...props}
    >
      {text}
    </Button>
  )
}

function Project({title, description, github, docs}: {title: string, description: string, github?: string, docs?: string}) {
  return (
    <Card sx={{marginTop: "24px"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        {docs !== undefined ? <Button href={docs} size="small" startIcon={<HomeIcon />}>Homepage</Button> : null}
        {github !== undefined ? <Button href={github} size="small" startIcon={<GitHubIcon />}>GitHub</Button> : null}
      </CardActions>
    </Card>
  )
}

function App() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <Container>

          <Card sx={{ maxWidth: maxWidth }}>
            <CardHeader
              avatar={
                <Avatar src={process.env.PUBLIC_URL + '/me.png'} />
              }
              title="Vladimir Alinsky"
              subheader="Software Engineer"
              action={
                <ButtonGroup>
                  <IconButton aria-label="GitHub" href="https://github.com/SKY-ALIN">
                    <GitHubIcon />
                  </IconButton>

                  <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/alinsky/">
                    <LinkedInIcon />
                  </IconButton>
                </ButtonGroup>
              }
            />

            <CardContent>
              <Typography sx={{ mb: 1.5 }}>
                Hello! I'm a Dreamer focusing on high-load distributed systems.
                This is my little personal website with media links and open-source projects.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                You are welcome.
              </Typography>

              <Divider><Typography color="text.secondary">Social Medias</Typography></Divider>
              <Box sx={{textAlign: 'center'}}>
                <MediaButton text="Twitter" icon={<TwitterIcon />} href="https://twitter.com/AlinskyVladimir" />
                <MediaButton text="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/sky.alin/" />
                <MediaButton text="Channel" icon={<TelegramIcon />} href="https://t.me/alinsky_tech" />
              </Box>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="Telegram" href="https://t.me/sky_alin">
                <TelegramIcon />
              </IconButton>

              <IconButton aria-label="Email" href="mailto:vladimir@alinsky.tech">
                <AlternateEmailIcon />
              </IconButton>

              <Button
                className={classes.pulse}
                sx={{marginLeft: 'auto'}}
                color="inherit"
                onClick={handleExpandClick}
                endIcon={<ExpandMoreIcon sx={{transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)'}} />}
              >Open Source</Button>
            </CardActions>
          </Card>

          <Collapse in={expanded}>
            <Box>
              <Project
                title="Regta Framework"
                description="Lightweight framework to create and execute periodic async and sync jobs on different processes, threads and event loops."
                github="https://github.com/SKY-ALIN/regta"
                docs="https://regta.Alinsky.tech"
              />
              <Project
                title="telegram-text"
                description="Python markup module for Telegram messenger. This module provides a rich list of components to build any possible markup fast and render it to specific html and MarkdownV2 formats."
                github="https://github.com/SKY-ALIN/telegram-text"
                docs="https://telegram-text.Alinsky.tech/"
              />
            </Box>
          </Collapse>

        </Container>

        <Paper className={classes.footer} sx={{padding: "16px 16px"}}>
          <Box sx={{maxWidth: maxWidth, marginRight: "auto", marginLeft: "auto", textAlign: 'center'}}>
            <Typography variant="overline">Copyright © 2022, Vladimir Alinsky</Typography>
          </Box>
        </Paper>

      </div>
    </ThemeProvider>
  );
}

export default App;
