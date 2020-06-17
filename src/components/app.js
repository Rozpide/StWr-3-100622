import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from "../shared/header";
import { Body } from "./body";
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
                    <Route exact path="/" component={Body} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}