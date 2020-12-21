import React from "react";

export default function FullPageImage(props) {
    return (
        <img src={props.image} alt={props.alt} className="full-screen-image" />
    )
}