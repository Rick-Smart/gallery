<<<<<<< HEAD
import React from "react";
import "./App_header.css";

import Button from "@mui/material/Button";

function App_header() {
  return (
    <>
      <Button variant="text" disabled={true}>
        Button
      </Button>
    </>
  );
}

export default App_header;
=======
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/Message';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function App_tester() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="|" aria-label="breadcrumb" sx={{"& ol": {justifyContent: "center", margin: "auto"}}}>
        <Link
          underline="hover"
          sx={{ display: 'center', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'center', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Portfolio
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'center', alignItems: 'center' }}
          color="text.primary"
          href="/material-ui/getting-started/installation/"
        >
          <MessageIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
      </Breadcrumbs>
    </div>
  );
}
>>>>>>> 4018b361caf877c841d0fc19de7e1a8d585237e4
