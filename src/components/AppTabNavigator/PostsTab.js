import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import {Body, Content, Container, Header, Icon, Left, Right} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardCompo from "../CardCompo";

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
                    <Right><Icon name="ios-camera" style={{paddingLeft: 10}}></Icon></Right>
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