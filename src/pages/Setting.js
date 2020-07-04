import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Image,
} from 'react-native';
import firebase from "../Firebase";
import { Actions } from 'react-native-router-flux'


const Setting = () => {
    return (
        <View style = {styles.container}>
            <View style={styles.headImage}>
                <Image style={{width:200, height:200, borderRadius:100}}
                       source={require('../images/Me.png')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity style = {styles.button}>
                    <Text style={styles.buttonText}>Switch Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = { () => {
                        firebase.auth().signOut()
                        Actions.login()
                    }}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headImage:{
        flex: 1,
        marginTop: 150,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    button: {
        width: 300,
        backgroundColor: '#00251a',
        borderRadius: 25,
        marginVertical: 20,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center',
    },
    buttonStyle: {
        marginTop:50,
        paddingVertical: 0
    }
});