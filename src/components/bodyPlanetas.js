import React, { useState, useEffect } from "react";
import { Spinner } from "./spinner";
import { CardPlanetas } from "../shared/cardPlanetas";

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
                            return <CardPlanetas key={index} planeta={planeta} />
                        })



                }




            </div>
        </>)
}