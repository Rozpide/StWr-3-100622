import React from "react";

export const Personaje = (props) => {
    return (<>
        <div className="row">
            <div className="col-md-6">
                <img src="http://placehold.it/800x600" className="card-img-top" alt="" />
            </div>

            <div className="col-md-6 text-center">
                <h1>aqui{props.name}</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>


        <hr className="separador" />

        <div className="row text-center">
            <div className="col-md-2">Name: <p>a</p></div>
            <div className="col-md-2">BirthYear: <p>a</p></div>
            <div className="col-md-2">Gender: <p>a</p></div>
            <div className="col-md-2">Height: <p>a</p></div>
            <div className="col-md-2">SkinColor <p>a</p></div>
            <div className="col-md-2">EyeColor <p>a</p></div>
        </div>

    </>
    )
}