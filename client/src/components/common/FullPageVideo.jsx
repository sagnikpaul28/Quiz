import React from "react";

export function FullPageVideo(props) {
    return (
        <video autoPlay muted loop className="full-screen-video">
            <source src={ props.video } type="video/mp4" />
        </video>
    )
}