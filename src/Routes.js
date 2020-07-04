import React from 'react';
import {Router,  Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Signup from "./pages/Signup";
import MainScreen from "./components/MainScreen";


const Routes = () => (
    <Router>
        <Scene key = "root" hideNavBar={true}>
            <Scene key = "main" component = {MainScreen} title = "Login" />
            <Scene key = "login" component = {Login} title = "Login" initial = { true } />
            <Scene key = "signup" component = {Signup} title = "Signup" />
        </Scene>
    </Router>
)
export default Routes