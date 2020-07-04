import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Image style={{width:100, height:100}}
                       source={require('../images/Logo.png')}/>
                <Text style={styles.LogoText}>Welcome to HappyCooking!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    LogoText: {
        marginVertical: 10,
        fontSize: 15,
        color: 'rgba(225, 225, 225, 0.7)',
    }
});