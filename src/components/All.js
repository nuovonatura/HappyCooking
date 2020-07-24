import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    FlatList,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from "react-native-star-rating";
import firebase from '../Firebase';

let data = null;

firebase.firestore().collection("RecipeUniverse").get()
    .then(querySnapshot => {
        data = new Array(querySnapshot.size);
        let index = 0;
        querySnapshot.forEach(doc => {
            data[index] = doc.data();
            index++;
        })
    })

class All extends Component<{}>{
    state={
        data: data,
        data_temp: data,
        search: ''
    }
    constructor(props) {
        super(props);
    }


    _search(text) {
        let data = [];
        this.state.data_temp.map(function (recipe) {
            if(recipe.name.indexOf(text) > -1) {
                data.push(recipe);
            }
        });
        this.setState({
            data: data,
            search: text
        })
    }

    renderItem= ({item}) => {
        return(
            <TouchableOpacity onPress = { () => this.props.parentRef.props.navigation.push("RecipeDetail", {
                passon: item
            }) }>
                <View style={styles.cells}>
                    <View style={styles.recipeImage}>
                        <Image
                            style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                            source = {{uri: item.image}}/>
                    </View>
                    <View style={styles.recipeTextBox}>
                        <Text style={styles.recipeText}>{item.name}</Text>
                        <Text style={{fontWeight: '500', color: '#9f90b6',}}>Time: {item.time}</Text>
                        <Text style={{fontWeight: '500', color: '#9f90b6',}}>{item.category}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.rating}
                            starSize={10}
                            fullStarColor={'#65499c'}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.section}>
                    <TextInput
                        placeholder="search.."
                        style={{flex: 1, marginLeft: 10}}
                        value={this.state.search}
                        onChangeText={(text) => this._search(text)}
                    />
                    <TouchableOpacity
                        onPress={()=>this._search('')}
                        style={{paddingHorizontal: 10}}
                    >
                        <Ionicons
                            name="ios-close"
                            color="gray"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default All

var {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container1: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#ffffff',
    },
    section:{
        flexDirection:'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
        marginTop: 0,
    },
    container: {
        marginRight: 0,
        flex: 1,
        backgroundColor: '#003300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cells:{
        marginTop: 20,
        paddingHorizontal: 20,
        width: width-60,
        height: width -100,
        borderWidth: 0.5,
        borderRadius: 25,
        backgroundColor: "#eceff1",
        borderColor: '#dddddd',
    },
    recipeImage:{
        flex: 1,
        marginTop: 10,
    },
    recipeTextBox:{
        flex: 0.7,
        alignItems:'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 5,
    },
    recipeText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#65499c',
    }

});