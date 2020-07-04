import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import PostsTab from "./AppTabNavigator/PostsTab";
import MeTab from "./AppTabNavigator/MeTab";
import RecipeTab from "./AppTabNavigator/RecipeTab";

import Setting from "../pages/Setting";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <Tab.Navigator screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Moments') {
                    iconName = focused
                        ? 'ios-aperture'
                        : 'ios-aperture';
                } else if (route.name === 'Recipes') {
                    iconName = focused
                        ? 'ios-list'
                        : 'ios-list';
                } else if (route.name === 'Me') {
                    iconName = focused
                        ? 'ios-person'
                        : 'ios-person';
                }

                return <Ionicons name = {iconName} size = {size} color = {color} />
            },
        })}
                       tabBarOptions = {{
                           activeTintColor: 'purple',
                           inactiveTintColor: 'gray',
                       }}
        >
            <Tab.Screen name="Moments" component={PostsTab} />
            <Tab.Screen name="Recipes" component={RecipeTab} />
            <Tab.Screen name="Me" component={MeTab} />
        </Tab.Navigator>
    );
}

const RootStack = createStackNavigator();

function MainScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name = "Home" component = { HomeScreen } />
                <RootStack.Screen name = "Setting" component = { Setting } />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen