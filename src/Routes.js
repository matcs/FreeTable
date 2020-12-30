import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Explore from './pages/explore';
import Saved from  './pages/saved';
import Profile from  './pages/profile';
import Restaurants from './pages/restaurants';
import RestaurantDetails from "./pages/restaurant-details";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Explore' component={Explore} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name='Saved' component={Saved} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name='Restaurants' component={Restaurants} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen
                    name='RestaurantDetails'
                    component={RestaurantDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
