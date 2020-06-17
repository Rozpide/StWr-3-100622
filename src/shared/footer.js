import React from "react";

export const Footer = ({ goNext, next, previous }) => {
    return (<>
        <div className="row mb-3">
            <button type="button" className="col-md-4 btn btn-secondary btn-lg offset-md-2 mr-4 btnFooter" onClick={()=>goNext(previous)}>Anterior</button>
            <button type="button" className="col-md-4 btn btn-secondary btn-lg btnFooter" onClick={()=>goNext(next)}>Siguiente</button>
        </div>
    </>)
}