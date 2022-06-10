import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Personaje } from "../views/personaje";
import { BodyPlanetas } from "../views/bodyPlanetas";
import {Planet} from "../views/planet";
import { Body } from "../views/body";
import { Header } from "../shared/header";
import { inyectContext } from "../store/appContext";


 const App = () => {
    return (<>
        <div className="container-fluid mt-4">

            <BrowserRouter>
                <Header />
                <hr></hr>
                <Switch>
                <Route exact path="/planeta/:id" component={Planet} />
                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/" component={Body} />
                    <Route render={() => <h1 className="text-center">no lo encuentro....</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}

export default inyectContext(App);