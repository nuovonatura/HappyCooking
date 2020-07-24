import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import Routes from "./src/Routes";
import MainScreen from "./src/components/MainScreen";
import PostUpload from "./src/pages/PostUpload";

export default class App extends Component<{}>{
    render() {
        return (
            <Routes />
            //<MainScreen/>
            //<PostUpload/>
        );
    }
}