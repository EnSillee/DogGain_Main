// import { useMediaQuery } from 'react-responsive'
// import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from './sidebar/Sidebar';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Forum from "./pages/Forum";
import Rule from "./pages/Rule";

import ReactModal from "react-modal";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='flex bg-grey-10'>
        <Sidebar />
        <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/forum" component={Forum} />
              <Route path="/rule" component={Rule} />
        </Switch>
        </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

ReactModal.setAppElement('#root')

export default App;

