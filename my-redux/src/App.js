import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./component/home/Home";
import MovieDetail from "./component/moviedetails/Moviedetails";
import PageNotFound from "./component/pagenotfound/Pagenotfound";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact component={<Home />} />
            <Route path="/movie/:imdbID" component={ < MovieDetail />} />
            <Route component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
