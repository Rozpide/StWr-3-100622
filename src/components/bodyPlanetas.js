import React, { useState, useEffect } from "react";
import { Spinner } from "./spinner";

export const BodyPlanetas = () => {

    const [state, setState] = useState({
        planetas: []
    })


    const getPlanetas = () => {
        fetch("https://swapi.dev/api/planets")
            .then(resolve => resolve.json())
            .then(data => {
                setState(prevState => {
                    return { ...prevState, planetas: data }
                })
            })
    }


    useEffect(() => {
        getPlanetas();
    }, [])

    return (
        <>
            <div className="row ">

                {
                    state.planetas.length === 0 ? <Spinner /> :
                        state.planetas.results.map((planeta, index) => {
                            return <div key={index} className="col-md-3 my-4">
                                <div  class="card">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><ins>{planeta.name}</ins></h5>
                                        <p class="card-text"><b>Climate:</b> {planeta.climate}</p>
                                        <p class="card-text"><b>Gravity:</b> {planeta.gravity}</p>
                                        <p class="card-text"><b>Terrain:</b> {planeta.terrain}</p>
                                        <a href="" class="btn btn-outline-primary">Learn More!</a>
                                        <a href="" class="btn btn-outline-warning float-right"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        })



                }




            </div>
        </>)
}