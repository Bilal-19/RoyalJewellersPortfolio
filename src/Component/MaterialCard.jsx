import React from "react";

export default function MaterialCard(props){
    return (
        <>
        <div className="col-md-3">
            <div className="material-card">
                <img src={props.data.imageAdd}></img>
                <p className="mb-0 mt-2">{props.data.desc}</p>
                <p className="mb-0">Price: {props.data.price}</p>
            </div>
        </div>
        </>
    )
}