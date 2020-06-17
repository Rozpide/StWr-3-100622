import React from "react";

export const CardPlanetas = (props) => {
    return (
        <div className="col-md-3 my-4 ">
            <div className="card">
                <img src="http://placehold.it/300x150" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center"><ins>{props.planeta.name}</ins></h5>
                    <p className="card-text"><b>Climate:</b> {props.planeta.climate}</p>
                    <p className="card-text"><b>Gravity:</b> {props.planeta.gravity}</p>
                    <p className="card-text"><b>Terrain:</b> {props.planeta.terrain}</p>
                </div>
                <div className="card-footer">
                    <a href="" className="btn btn-outline-primary">Learn More!</a>
                    <a href="" className="btn btn-outline-warning float-right"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}