import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from 'react-native';
import ImagePicker from "react-native-image-picker"
import {Body, Container, Header, Icon, Left, Right, Content} from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'


const handleUpload = () => {
    ImagePicker.showImagePicker({maxHeight: 500, maxWidth: 500}, response => {
        if(response.didCancel) {
            return;
        }
    })
}


const PostUpload = () => {

        return (
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Header>
                    <Left><AntDesign name="arrowleft" style={{ fontSize: 25, paddingLeft: 10}}></AntDesign></Left>
                    <Body><Text style={{fontWeight: "700"}}>Post</Text></Body>
                    <Right>
                        <TouchableOpacity>
                            <Icon name="ios-add" style={{paddingRight:10, fontSize: 32}}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{alignItems: 'center'}}>
                        <TextInput style={styles.inputBox}
                                   placeholder="What do you want to say..."
                                   palceholderTextColor='#ffffff'
                        />
                    </View>
                </Content>
            </Container>

        );
}

export default PostUpload;

var {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    inputBox: {
        width: width - 20,
        height: 200,
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
    },
})