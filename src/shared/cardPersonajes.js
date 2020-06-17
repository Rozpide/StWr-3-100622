import React from "react";

export const CardPersonajes = (props) => {
    return (
        <div className="col-md-3 my-4 ">
            <div className="card border-0">
                <img src="http://placehold.it/300x150" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center"><ins>{props.personaje.name}</ins></h5>
                    <p className="card-text"><b>Gender:</b> <i>{props.personaje.gender}</i></p>
                    <p className="card-text"><b>HairColor:</b> <i>{props.personaje.hair_color}</i></p>
                    <p className="card-text"><b>EyesColor:</b> <i>{props.personaje.eye_color}</i></p>
                </div>
                <div className="card-footer">
                    <a href="" className="btn btn-outline-primary">Learn More!</a>
                    <a href="" className="btn btn-outline-warning float-right"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}