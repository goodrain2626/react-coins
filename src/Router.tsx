import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin /> {/*coin list -> coin */}
        </Route>
        <Route path="/">
          <Coins /> {/*Home Page = coin list*/}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
