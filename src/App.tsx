import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

import Table from './components/Table/Table';
import Map from './components/Map/Map';
import { getPosts } from './actions/posts.js';

import './App.css';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div >
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">
          <Map />
          <Table />
        </div>
      </div>  
    </div>
  );
}

export default App;
