import React from "react";
import image from "../../img/bg.jpg";

import FullPageImage from '../common/FullWidthImage';
import Layer from '../common/Layer';
import { Content } from './Content';

class HomePageMain extends React.Component {
    render() {
        return (
            <div className="home">
                <FullPageImage image={image} alt="Full Width Image" />
                <Layer />
                <Content />
            </div>
        )
    }
}

export default HomePageMain;