import React from "react";

import { FullPageVideo } from './FullPageVideo';
import { Layer } from './Layer';
import { Content } from './Content';

class HomePageMain extends React.Component {
    render() {
        return (
            <div className="home">
                <FullPageVideo />
                <Layer />
                <Content />
            </div>
        )
    }
}

export default HomePageMain;