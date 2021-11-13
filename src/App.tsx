import React, { useState, useEffect } from 'react';
import { AppBar, Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { getPosts } from './actions/posts.js';
import styles from './styles';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = styles();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"> Data Visualize </Typography>
      </AppBar>
      <Table />
    </Container>
  );
}

export default App;
