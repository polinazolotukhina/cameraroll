import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CameraScreen from './components/CameraScreen';
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';

const RouterComponent = () => (
    <Router>
        <Scene>
            <Scene key="navbar" component={Navbar} title="Menu" />
            <Scene
                key="cameraScreen"
                component={CameraScreen}
                title="cameraScreen"
            />
            <Scene
                key="popularMovies"
                component={PopularMovies}
                title="Popular Movies"
            />
        </Scene>
    </Router>
);
export default RouterComponent;
