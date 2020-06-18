import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Personaje } from "../views/personaje";
import { BodyPlanetas } from "../views/bodyPlanetas";
import { Body } from "../views/body";
import { Header } from "../shared/header";
import { inyectContext } from "../store/appContext";


export const App = () => {
    return (<>

        <div className="container-fluid mt-4">

            <BrowserRouter>
                <Header />
                <hr></hr>
                <Switch>
                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/" component={Body} />
                    <Route render={() => <h1 className="text-center">Woops! Not found</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}

inyectContext(App);