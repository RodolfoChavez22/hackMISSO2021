import React, { useState, useEffect } from 'react';
import { AppBar, Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { getPosts } from './actions/posts.js';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container  >
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"> Data Visualize </Typography>
      </AppBar>
      <Table />
    </Container>
  );
}

export default App;
