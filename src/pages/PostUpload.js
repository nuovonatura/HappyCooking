import React, {Component,useState, useLayoutEffect} from 'react';
import { Actions } from 'react-native-router-flux'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView
} from 'react-native';
import {Body, Container, Header, Icon, Left, Right, Content} from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {IconButton, Surface} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";


export default class PostUpload extends Component {
    state = {
        text: "",
        image: null,
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        })

        if (!result.cancelled) {
            this.setState({image: result.uri})
        }
    }



        render() {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontWeight: "500"}}>Post</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            autoFocus={true}
                            multiline={true}
                            numberOfLines={4}
                            style={{flex: 1}}
                            placeholder={"What to share something?"}
                            onChangeText={text => this.setState({text})}
                            value={this.state.text}
                        >

                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.photo} onPress={this.pickImage()}>
                        <Ionicons name="md-camera" size={32} color={"#D8D9D8"}></Ionicons>
                    </TouchableOpacity>

                    <View style={{marginHorizontal: 32, marginTop: 32, height: 150}}>
                        <Image source={{uri: this.state.image}} style={{width: "100%", height: "100%"}}/>
                    </View>
                </SafeAreaView>
            );
        }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9D8"
    },
    inputBox: {
        paddingRight: 20,
        width: 400,
        height: 150,
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32,

    }
})