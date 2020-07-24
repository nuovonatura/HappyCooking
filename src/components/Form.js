import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "../Firebase";

export default class Form extends Component<{}> {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text})
    }

    handleLogin = () => {
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Actions.main()
                firebase.firestore()
                    .collection("Users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({lastLogin: firebase.firestore.Timestamp.now()},{ merge: true })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }

    handleSignup = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                alert("Account created!")
                const userData = {
                    dateCreated: firebase.firestore.Timestamp.now(),
                    lastLogin: firebase.firestore.Timestamp.now(),
                }
                const userDoc = firebase.firestore()
                    .collection("Users")
                    .doc(firebase.auth().currentUser.uid);

                userDoc.set(userData)
                    .catch(error => {
                        console.log(error);
                    });

                Actions.main()
            })
            .catch(function(error) {
                let errorMessage = error.message;
                alert(errorMessage);
                console.log(error);
            });
    }

    handlePress = () => {
        if (this.props.type === 'Login') {
            this.handleLogin();
        } else if (this.props.type === 'Signup') {
            this.handleSignup();
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput style={styles.inputBox}
                        placeholder="Email"
                        palceholderTextColor='#ffffff'
                        keyboardType="email-address"
                        onChangeText = { this.handleEmail }
                        onsubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                           underlineColor='rgba(0, 0, 0, 0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           onChangeText = { this.handlePassword }
                           ref={(input) => this.password = input}
                />
                <TouchableOpacity style = {styles.button}>
                    <Text
                        style={styles.buttonText}
                        onPress = { this.handlePress }
                    >{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputBox: {
        width: 300,
        height: 60,
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: '#00251a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center',
    }
});