import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends React.Component {
  render() {
    return <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">
          Our products
        </Typography>
      </Toolbar>
    </AppBar>
  }
}


