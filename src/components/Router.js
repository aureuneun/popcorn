import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Search from "../routes/Search";
import TV from "../routes/TV";
import Detail from "../routes/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
    </BrowserRouter>
  );
};

export default Router;
