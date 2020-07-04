import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Logo from "../components/Logo";
import Form from "../components/Form";

import {Actions} from 'react-native-router-flux';

const Login = () => {
    const goToSignup = () => {
        Actions.signup()
    }

    return (
        <View style = {styles.container}>
            <Logo/>
            <Form type="Login"/>
            <View style={styles.SignupTextCon}>
                <Text style={styles.SignupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={goToSignup}><Text style={styles.SignupButton}>Signup</Text></TouchableOpacity>
            </View>
        </View>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SignupTextCon: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    SignupText: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 16,
    },
    SignupButton: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: '500',
    }
});