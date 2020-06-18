import React from "react";
import { Link } from "react-router-dom";

export const CardPersonajes = (props) => {
    console.log("card Personaje", props);
    return (
        <div className="col-md-3 my-4 ">
            <div className="card border-0">
                <img src="http://placehold.it/300x150" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center"><ins>{props.personaje.name}</ins></h5>
                    <p className="card-text"><b>Gender:</b><i>{props.personaje.gender}</i></p>
                    <p className="card-text"><b>HairColor:</b><i>{props.personaje.hair_color}</i></p>
                    <p className="card-text"><b>EyesColor:</b><i>{props.personaje.eye_color}</i></p>
                </div>
                <div className="card-footer">
                    <Link to="/personaje" className="btn btn-outline-primary" personaje={props}>Learn More!</Link>
                    <button className="btn btn-outline-warning float-right"><i className="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}