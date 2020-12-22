import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/home';
import Restaurants from './pages/restaurants';
import RestaurantDetails from "./pages/restaurant-details";
const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown:false}}>
                <Stack.Screen
                 name="Home" 
                 component={Home} 
                />
                <Stack.Screen 
                 name="Restaurants" 
                 component={Restaurants} 
                />
                <Stack.Screen 
                 name="RestaurantDetails" 
                 component={RestaurantDetails} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}