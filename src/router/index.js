import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Detail, Profile, Splash, HomeLogin, LoginScreen, SignUp, Post, Post2, Post3, PostScreen, PostLibrary } from '../pages'
import { TabBar } from '../components';
import { InputData, Update } from '../data'
// import * as firebase from 'firebase';
// import apiKey from '../config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen
                name='Home'
                component={Home}
                initialParams={{ icon: 'home' }}
            />
            <Tab.Screen
                name='Detail'
                component={Detail}
                initialParams={{ icon: 'search1' }}
            />
            <Tab.Screen
                name='Create'
                component={InputData}
                initialParams={{ icon: 'plus' }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                initialParams={{ icon: 'user' }}
            />
        </Tab.Navigator>
        // <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        //     <Tab.Screen name="Home" component={Home} />
        //     <Tab.Screen name="Detail" component={Detail} />
        //     <Tab.Screen name="Galerry" component={PostScreen} />
        //     <Tab.Screen name="Library" component={PostLibrary} />
        //     <Tab.Screen name="Profile" component={Profile} />
        // </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="HomeLogin" component={HomeLogin} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
            <Stack.Screen name="Post2" component={Post2} options={{ headerShown: false }} />
            <Stack.Screen name="Post3" component={Post3} options={{ headerShown: false }} />
            <Stack.Screen name="Update" component={Update} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
