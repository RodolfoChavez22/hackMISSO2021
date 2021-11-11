import React from 'react';
import { AppBar, Container, Typography } from '@material-ui/core';
import styles from './styles';

function App() {
  const classes = styles();

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"> Data Visualize </Typography>
      </AppBar>
    </ Container>
  );
}

export default App;
