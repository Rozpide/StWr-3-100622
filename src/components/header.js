import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (<>
        <div className="row my-2">

            <div className="col-md-2">
                <img src="./src/img/starWarsLogo.png"></img>
            </div>

            <div className="col-md-8">
                <ul id="ulHeader" className="nav d-flex justify-content-around">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/personajes">Personajes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to="/planetas">Planetas</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-2">
                <div className="dropdown float-right">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favoritos<span id="spanNum"><p className="font-weight-bold" id="pNum">3</p></span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                    </div>
                </div>



            </div>
        </div>
    </>)
}