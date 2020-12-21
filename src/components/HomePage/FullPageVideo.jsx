import React from "react";
import video from "../../img/home-bg.mp4";

export function FullPageVideo() {
    return (
        <video autoPlay muted loop className="full-screen-video">
            <source src={ video } type="video/mp4" />
        </video>
    )
}