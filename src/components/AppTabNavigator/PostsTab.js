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

import { createStackNavigator } from "@react-navigation/stack";
import PostUpload from "../../pages/PostUpload";


class PostsTabBase extends Component {
    static navigationOptions = {
        title: "HappyCooking",
    }

    render() {
        return(
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <TouchableOpacity
                            style={{flex: 1, alignItems: 'center'}}
                            onPress = { () => this.props.navigation.navigate("Me") }>
                            <Image source={require('../../images/Me.png')}
                                   style={{width:45, height:45, borderRadius:37.5}}/>
                        </TouchableOpacity>
                    </Left>
                    <Body><Text style={{fontWeight: 'bold'}}>HappyCooking</Text></Body>
                    <Right>
                        <TouchableOpacity
                            onPress = { () => this.props.navigation.navigate("PostsUpload") }
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

const postsStack = createStackNavigator();

function PostsTab() {
    return (
        <postsStack.Navigator>
            <postsStack.Screen name = "PostsTabBase" component = { PostsTabBase }/>
            <postsStack.Screen name = "PostsUpload" component = { PostUpload }/>
        </postsStack.Navigator>
    );
}

export default PostsTab;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    }
})
