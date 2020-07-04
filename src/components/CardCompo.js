import React, {Component}from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import requestIdleCallback from "react-native-web/dist/modules/requestIdleCallback";

class CardCompo extends Component {
    render() {
        const images = {
            "1":require('../images/c1.png'),
            "2":require('../images/c2.png'),
            "3":require('../images/c3.png'),
            "4":require('../images/c4.png'),
            "5":require('../images/c5.png'),
            "6":require('../images/c6.png'),
            "7":require('../images/c7.png'),
            "8":require('../images/c8.png'),
        }
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../images/Me.png')}/>
                        <Body>
                            <Text>Helen</Text>
                            <Text note>Jun 25, 2020</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]}
                    style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{ color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem style={{height:20}}>
                    <Text style={{marginTop:-20}}>{this.props.likes}</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight: 'bold'}}>
                                Helen
                            </Text>
                            Nutrition is defined as the processes by
                            which an animal or plant takes in and utilises
                            food substances. Essential nutrients include
                            protein, carbohydrate, fat, vitamins, minerals
                            and electrolytes. Normally, 85% of daily energy
                            use is from fat and carbohydrates and 15% from protein
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default CardCompo;

const styles = StyleSheet.create({
    container: {
        marginRight: 0,
        flex: 1,
        backgroundColor: '#003300',
        alignItems: 'center',
        justifyContent: 'center',
    },
});