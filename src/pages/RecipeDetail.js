import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    SafeAreaView,
    ScrollView,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ingredients=[
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
    {ingredients:"1 serving cooking spray"},
]

const steps=[
    {steps:"Step1 Preheat the oven to 425 degrees F (220 degrees C). Spray a large sheet pan with cooking spray.\n"},
    {steps:"Step2 Place potatoes into a large pot and cover with salted water; bring to a boil. Reduce heat " +
            "to medium-low and simmer until tender, " +
            "10 to 12 minutes. Add corn and boil for an additional 5 minutes. " +
            "Drain. Cut corn into thirds."
            },
    {steps:"Step3 Meanwhile, combine 3 tablespoons olive oil, 3 tablespoons Creole seasoning, " +
            "juice from 1 lemon, garlic, Italian seasoning, 1/2 teaspoon paprika, red pepper " +
            "flakes, salt, and pepper in a small bowl. Mix well to combine and set seasoning mixture aside."},
    {steps:"Step4 Combine boiled potatoes and corn, all the bell peppers, cherry tomatoes, onion, " +
            "and sausage slices in a large bowl. " +
            "Add seasoning mixture and mix evenly."},
    {steps:"Step5 Spread potato mixture onto a sheet pan in a single layer. Place lemon wedges evenly on all sides of the sheet pan."},
    {steps:"Step6 Bake in the preheated oven for 8 minutes."},
    {steps:"Meanwhile, combine shrimp, 1 tablespoon olive oil, " +
            "1/2 teaspoon paprika, and 1/2 teaspoon Creole seasoning in a bowl." +
            " Marinate for a few minutes. Add shrimp to the sheet pan with the potato mixture after" +
            " 8 minutes of baking and mix to combine." },
    {steps:"Return sheet pan to the oven and cook until shrimp are opaque, 6 to 8 minutes." +
            " Remove lemon wedges and garnish with parsley and green onions."},

]


export default class RecipeDetail extends Component {
    render() {
        const { passon } = this.props.route.params;

        return (
            <View >
                <ImageBackground
                    source={passon.image}
                    style={{
                        width: '100%',
                    }}
                >
                    <SafeAreaView>
                        <View style={styles.menuBar}>
                            <View style={styles.back}>
                                <Antdesign
                                    name="arrowleft"
                                    color="white"
                                    size={28}
                                />
                            </View>
                            <View style={{paddingRight: 10}}>
                                <Antdesign
                                    name="hearto"
                                    size={28}
                                    color={'white'}
                                />
                            </View>
                        </View>
                        <View style={styles.mainRecipe}>
                            <View style={styles.textBox}>
                                <Text style={{fontWeight:"700", fontSize: 14,color:'#fff', margin:10}}>{JSON.stringify(passon.name)}</Text>
                                <View style={styles.divider}/>
                                <Text style={{fontWeight: '600', fontSize:11, color:'#fff', marginTop: 5, marginLeft:10}}>Per Serving: </Text>
                                <Text style={{color:'#fff', fontSize: 11, margin:10}}>332.5 calories | 18.9 g protein | 39.2 g carbohydrates</Text>
                            </View>
                        </View>
                        <ScrollView style={styles.recipeContainer}>
                            <Text style={{fontSize:20, fontWeight:"700", padding: 10}}>Ingredients</Text>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text>1 serving cooking spray</Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text>1 serving cooking spray</Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text>1 serving cooking spray</Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text>1 serving cooking spray</Text>
                            </View>
                            <Text style={{fontSize:20, fontWeight:"700", padding: 10}}>Steps</Text>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text style={{fontWeight: "700"}}>Step1</Text>
                                <Text style={{padding:10}}> Preheat the oven to 425 degrees F (220
                                    degrees C). Spray a large sheet pan with cooking spray.
                                </Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text style={{fontWeight: "700"}}>Step2</Text>
                                <Text style={{padding:10}}> Place potatoes into a large pot and cover with salted
                                    water; bring to a boil. Reduce heat
                                    to medium-low and simmer until tender,
                                    10 to 12 minutes. Add corn and boil for an additional 5 minutes.
                                    Drain. Cut corn into thirds.
                                </Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text style={{fontWeight: "700"}}>Step3</Text>
                                <Text style={{padding:10}}> Meanwhile, combine 3 tablespoons olive oil, 3
                                    tablespoons Creole seasoning,
                                    juice from 1 lemon, garlic, Italian seasoning, 1/2 teaspoon paprika,
                                    red pepper flakes, salt, and pepper in a small bowl.
                                    Mix well to combine and set seasoning mixture aside.
                                </Text>
                            </View>
                            <View style={styles.ingredients}>
                                <MaterialCommunityIcons name={"radiobox-blank"} style={{padding: 5}}/>
                                <Text style={{fontWeight: "700"}}>Step4</Text>
                                <Text style={{padding:10}}> Combine boiled potatoes and corn,
                                    all the bell peppers, cherry tomatoes, onion, and sausage slices in a large
                                    bowl. Add seasoning mixture and mix evenly.
                                </Text>
                            </View>
                        </ScrollView>

                    </SafeAreaView>
                </ImageBackground>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginRight: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    textBox:{
        color: '#fff',
        backgroundColor: "rgba(25, 25, 25, 0.6)",
        borderRadius: 20,
    },
    text:{
        color:'white',
        margin: 10,
    },
    back:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10
    },
    mainRecipe:{
        paddingLeft: 10,
        paddingTop: 150,
        paddingBottom: 20,
        margin: 0,
        alignSelf:"flex-start"
    },
    divider:{
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    recipeContainer:{
        marginTop: 5,
        padding: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ingredients:{
        flexDirection: "row",
        justifyContent:'flex-start',
        marginBottom:10,
        backgroundColor: 'rgba(25, 25, 25, 0.2)',
        borderRadius: 15,
    }
});

