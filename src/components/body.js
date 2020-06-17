import React, { useState, useEffect } from "react";
import { Spinner } from "./spinner";

export const Body = () => {

    const [state, setState] = useState({
        personajes: [],
        planetas: []
    })

    const getPersonajes = () => {
        fetch("https://swapi.dev/api/people")
            .then(resolve => resolve.json())
            .then(data => {
                setState(prevState => {
                    return { ...prevState, personajes: data }
                })
            })
    }
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
        getPersonajes();
        getPlanetas();
    }, [])

    console.log(state.personajes)
    return (
        <>
            <div className="row ">

                {
                    state.personajes.length === 0 ? <Spinner /> :
                        state.personajes.results.map((personaje, index) => {
                            return <div key={index} className="col-md-3 my-4">
                                <div  class="card">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><ins>{personaje.name}</ins></h5>
                                        <p class="card-text"><b>Gender:</b> {personaje.gender}</p>
                                        <p class="card-text"><b>HairColor:</b> {personaje.hair_color}</p>
                                        <p class="card-text"><b>EyesColor:</b> {personaje.eye_color}</p>
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