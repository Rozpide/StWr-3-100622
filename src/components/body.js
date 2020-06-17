import React, { useState, useEffect } from "react";
import { Spinner } from "./spinner";
import { Footer } from "../shared/footer";
import { CardPersonajes } from "../shared/cardPersonajes";

const urlPersonajes = "https://swapi.dev/api/people"

export const Body = () => {

    const [state, setState] = useState({
        personajes: [],
        planetas: []
    })

    const getPersonajes = (url) => {
        fetch(url)
            .then(resolve => resolve.json())
            .then(data => {
                setState(prevState => {
                    return { ...prevState, personajes: data }
                })
            })
    }

    useEffect(() => {
        getPersonajes(urlPersonajes);
    }, [])


    return (
        <>
            <div className="row ">

                {
                    state.personajes.length === 0 ? <Spinner /> :
                        state.personajes.results.map((personaje, index) => {
                            return <CardPersonajes key={index} personaje={personaje} />
                        })
                }
            </div>
            <Footer goNext={getPersonajes} {...state.personajes} />
        </>)
}