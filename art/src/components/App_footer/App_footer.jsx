import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GoogleIcon from '@mui/icons-material/Google';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { auto } from '@popperjs/core';
import { FitScreen } from '@mui/icons-material';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(3)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List sx={{ position: 'fixed', bottom: 50, left: 0, right: 0}}>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person} sx={{paddingBottom: '3px', paddingTop: '3px', textAlign: 'center'}}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Google" icon={<GoogleIcon fontSize='24px' />} />
          <BottomNavigationAction label="Reviews" icon={<FavoriteIcon fontSize='24px' />} />
          <BottomNavigationAction label="Share" icon={<ShareIcon fontSize='24px' />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'These guys are awesome!',
    secondary: 'This team is amazing. We are so happy with the results.',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Thank you ART team!',
    secondary: 'These guys are prompt, professional, and their work is excellent.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: 'Highly recommend!',
    secondary: `As a seasoned developer I can admit I'm impressed.`,
    person: '/static/images/avatar/5.jpg',
  },
];