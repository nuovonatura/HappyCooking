import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, Image,
    Dimensions
} from 'react-native';
import {Body, Container, Content, Header, Icon, Left, Right} from "native-base";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { createStackNavigator } from "@react-navigation/stack";

import All from '../All';
import Recommended from "../Recommended";
import RecipeDetail from "../../pages/RecipeDetail";

class RecipeTabBase extends Component {
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
                    <Right><Icon name="ios-add" style={{paddingRight: 15}}></Icon></Right>
                </Header>

                <View style={styles.tabBar}>
                    <ScrollableTabView
                        style={{ marginTop: 5 }}
                        initialPage={0}
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        <All
                            parentRef = { this }
                            tabLabel = {"All"} />
                        <Recommended
                            parentRef = { this }
                            tabLabel={"Recommended"} />
                    </ScrollableTabView>
                </View>
            </Container>
        )
    }
}

const recipeStack = createStackNavigator();

function RecipeTab() {
    return (
        <recipeStack.Navigator>
            <recipeStack.Screen name = "RecipeTabBase" component = { RecipeTabBase } />
            <recipeStack.Screen name = "RecipeDetail" component = { RecipeDetail } />
            <recipeStack.Screen name = "All" component = { All } />
            <recipeStack.Screen name = "Recommended" component = { Recommended } />
        </recipeStack.Navigator>
    );
}

export default RecipeTab;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    header:{
        marginTop: 20
    },
    backgroundImage:{
        width: width,
        height: width,
        alignItems:'center',
    },
    tabBar:{
        flex: 1,
        marginTop: 5,
        paddingHorizontal:30
    }
})
//    <ImageBackground source={require('../../images/background.png')} style={styles.backgroundImage}>
//</ImageBackground>