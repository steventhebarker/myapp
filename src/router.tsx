import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import CatApp from "./CatApp";
import DogApp from "./DogApp";
import TitlePage from "./TitlePage";
import { Header } from "./components/Header";
import "./css/styles.css";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Route exact={true} path="/" component={TitlePage} />
          <Route path="/CatSpace" component={CatApp} />
          <Route path="/DogSpace" component={DogApp} />
          <Redirect from="*" to="/" />
        </main>
      </div>
    </BrowserRouter>
  );
};
