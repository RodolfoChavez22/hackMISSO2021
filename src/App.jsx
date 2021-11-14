import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import UserList from './pages/List/UserList';
import User from './pages/User/User';
import NewUser from "./pages/NewUser/NewUser";
import Scatterplot from './pages/ScatterPlot/ScatterPlot';
import Linegraph from './pages/LineGraph/LineGraph';
import Table from './pages/Table/Table';
import BarG from './pages/Bar/BarG';
import Map from './pages/Map/Map';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';

import "./App.css"
import DataUp from './pages/DataUpload/Dataup';


const App = () => {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="home">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/new-user">
              <NewUser />
            </Route>
            <Route path="/scatter-plot">
              <Scatterplot />
            </Route>
            <Route path="/line-graph">
              <Linegraph />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/bar">
              <BarG />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/data-upload">
              <DataUp/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );

}

export default App;