import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ChooseImg from './components/ChooseImg';
import ImageFull from './components/ImageFull';
import Navbar from './components/Navbar';

const RouterComponent = () => (
    <Router>
        <Scene>
            <Scene key="navbar" component={Navbar} title="Menu" />
            <Scene
                key="cameraScreen"
                component={ChooseImg}
                title="Choose a photo"
            />
            <Scene key="fullImage" component={ImageFull} title="Full Image" />
        </Scene>
    </Router>
);
export default RouterComponent;
