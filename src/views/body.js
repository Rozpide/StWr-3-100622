import React, { useContext } from "react";
import { Spinner } from "../components/spinner";
import { Footer } from "../shared/footer";
import { CardPersonajes } from "../shared/cardPersonajes";
import { Context } from "../store/appContext";



export const Body = () => {
    const { store, actions } = useContext(Context);






    return (
        <>
            <div className="row">
             
            </div>
            <Footer/>


            {/* <Footer goNext={getPersonajes} {...state.personajes} /> */}
        </>)
}