import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, Dimensions,
} from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardCompo from "../CardCompo";
import { createStackNavigator } from "@react-navigation/stack";

var images = [
    require('../../images/c1.png'),
    require('../../images/c2.png'),
    require('../../images/c3.png'),
    require('../../images/c4.png'),
    require('../../images/c5.png'),
    require('../../images/c6.png'),
    require('../../images/c7.png'),
    require('../../images/c8.png'),
    require('../../images/c9.png'),
    require('../../images/c10.png'),
]

var {width, height} = Dimensions.get('window')

class MeTab extends Component {
    constructor() {
        super()
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne =() => {
        return images.map((image, index) => {
            return(
                <View key={index} style={[{width:(width)/3}, {height: (width)/3},
                    {marginBottom:2},
                    index % 3 !== 0 ? {paddingLeft: 2} : {paddingRight: 0}
                ]}>
                    <Image style={{flex: 1, width: undefined, height: undefined}}
                        source={image}
                    />
            </View>
            )
        })
    }

    renderSection = () => {
        if(this.state.activeIndex == 0) {
            return(
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if(this.state.activeIndex == 1) {
            return (
                <View>
                    <CardCompo imageSource="1" likes='101 likes'/>
                    <CardCompo imageSource="2" likes='1 likes'/>
                    <CardCompo imageSource="3" likes='505 likes'/>
                    <CardCompo imageSource="4" likes='99 likes'/>
                    <CardCompo imageSource="5" likes='5 likes'/>
                    <CardCompo imageSource="6" likes='76 likes'/>
                    <CardCompo imageSource="7" likes='88 likes'/>
                </View>
            )

        } else if(this.state.activeIndex == 2) {

        }
    }

    render() {
        return(
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Header>
                    <Left><Icon name="md-person-add" style={{paddingLeft: 10}}></Icon></Left>
                    <Body><Text>HelenYang</Text></Body>
                    <Right><EntypoIcon name="back-in-time" style={{paddingRight:10, fontSize: 32}}/></Right>
                </Header>
                <Content>
                    <View style={{paddingTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image source={require('../../images/Me.png')}
                                    style={{width:75, height:75, borderRadius:37.5}}/>
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>20</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>posts</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>30</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>recipes</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>50</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>followers</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row', paddingTop:10}}>
                                    <Button bordered dark
                                            style={{flex:3, marginLeft:10, justifyContent:'center', height: 30}}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered dark
                                            style={{flex:1, marginLeft:5, marginRight: 10, justifyContent:'center', height: 30}}
                                            onPress = { () => this.props.navigation.navigate("Setting") }>
                                        <Icon name='settings' style={{alignItems: 'center', marginBottom:-5}}/>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View style={{paddingVertical:10, paddingHorizontal: 10}}>
                            <Text style={{fontWeight:'bold'}}>Yang Yue</Text>
                            <Text>Chinese cuisine | Korean cuisine</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{flexDirection:'row', justifyContent: 'space-around',
                        borderTopWidth: 1, borderTopColor: '#eeeeee'}}>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(0)}
                                active={this.state.activeIndex == 0}
                            >
                                <Icon name='ios-keypad'
                                      style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(1)}
                                active={this.state.activeIndex == 1}
                            >
                                <Icon name='ios-list'
                                      style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(2)}
                                active={this.state.activeIndex == 2}
                            >
                                <Icon name='ios-bookmark'
                                      style={[this.state.activeIndex == 2 ? {} : {color: 'grey'}]}/>
                            </Button>
                        </View>

                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        )
    }
}

export default MeTab;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})