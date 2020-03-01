import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
// import SongsList from '../pages/SongsList';
// import SongView from '../pages/SongView';
// import NewSong from '../pages/NewSong';
import NotFoundPage from "./pages/NotFoundPage";

// const routes = {
//   "/": () => <HomePage />
//   "/songs": () => <SongsList />,
//   "/song/:id": ({ id }) => <SongView id={id} />,
//   "/new-song": () => <NewSong />
// };

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
