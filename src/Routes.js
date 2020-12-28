import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Explore from './pages/explore';
import Saved from  './pages/saved';
import Profile from  './pages/profile';
import Restaurants from './pages/restaurants';
import RestaurantDetails from "./pages/restaurant-details";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Explore' component={Explore} />
            <Tab.Screen name='Saved' component={Saved} />
            <Tab.Screen name='Restaurants' component={Restaurants} />
            <Tab.Screen name='Profile' component={Profile} />
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
