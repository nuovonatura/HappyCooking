import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Logo from "../components/Logo";
import Form from "../components/Form";
import { Actions } from "react-native-router-flux";

const Signup = () => {
    const goToLogin = () => {
        Actions.login();
    }
    return (
        <View style = {styles.container}>
            <Logo/>
            <Form type="Signup"/>
            <View style={styles.SignupTextCon}>
                <Text style={styles.SignupText}>Already have an account? </Text>
                <TouchableOpacity onPress={goToLogin}><Text style={styles.SignupButton}>Signin</Text></TouchableOpacity>
            </View>
        </View>
    )
}
export default Signup

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
