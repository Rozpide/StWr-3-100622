import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from "./footer";
import { notFound } from "./notFound";
import { BodyPlanetas } from "./bodyPlanetas";

export const App = () => {
    return (<>

        <div className="container-fluid mt-4">

            <BrowserRouter>
                <Header />
                <hr></hr>
                <Switch>
                <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/personajes" component={Body} />
                    <Route exact path="/" component={Body} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}