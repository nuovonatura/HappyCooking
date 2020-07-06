import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Body, Content, Container, Header, Icon, Left, Right} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardCompo from "../CardCompo";
import ImagePicker from "react-native-image-picker"

const handleUpload = () => {
    ImagePicker.showImagePicker({maxHeight: 500, maxWidth: 500}, response => {
        if(response.didCancel) {
            return;
        }
    })
}

class PostsTab extends Component {
    static navigationOptions = {
        title: "HappyCooking",
    }

    render() {
        return(
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Image source={require('../../images/Me.png')}
                                   style={{width:45, height:45, borderRadius:37.5}}/>
                        </View>
                    </Left>
                    <Body><Text style={{fontWeight: 'bold'}}>HappyCooking</Text></Body>
                    <Right>
                        <TouchableOpacity
                            onPress={handleUpload}
                        >
                            <Icon name="ios-camera" style={{paddingLeft: 10}}></Icon>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <CardCompo imageSource="1" likes='101 likes'/>
                    <CardCompo imageSource="2" likes='1 likes'/>
                    <CardCompo imageSource="3" likes='502 likes'/>
                </Content>
            </Container>

        )
    }
}

export default PostsTab;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    }
})
