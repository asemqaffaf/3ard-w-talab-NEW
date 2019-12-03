import React from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createNavigator,
    createSwitchNavigator
  } from "react-navigation";
  import {AsyncStorage} from 'react-native'
  import Profile from './Screens/Profile';
  import Home from "./Screens/Home";
  import Offers from './Screens/Offers'
  import CameraScreen from './Screens/CameraScreen'
  import LoginScreen from './Screens/LoginScreen'
  import { Ionicons , MaterialCommunityIcons} from '@expo/vector-icons';


  const HomeStack = createStackNavigator({
    Home
  });
  
  HomeStack.navigationOptions = {    
      tabBarLabel:'Home',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons color={tintColor}  name="home-outline" size={32} />
      )

  };
  const CameraStack = createStackNavigator({
    CameraScreen
  })
  CameraStack.navigationOptions={
    tabBarLabel : 'Camera',
    tabBarIcon : (porp)=> <MaterialCommunityIcons  color={porp.tintColor} name="camera" size={32} /> 
  
  }
  const ProfileStack = createStackNavigator({
    Profile
  });
  ProfileStack.navigationOptions = {
    tabBarLabel : 'Profile',
    tabBarIcon : (prop)=> <MaterialCommunityIcons name="account" color={prop.tintColor} size={32} ></MaterialCommunityIcons>
  };
  const OfferStack = createStackNavigator({
    Offers
  })
  
  OfferStack.navigationOptions ={
   tabBarLabel : 'Offer',
   tabBarIcon : (prop)=> <MaterialCommunityIcons name='tag' color={prop.tintColor} size={32} ></MaterialCommunityIcons>
  };
  const loginStack = createStackNavigator({
    LoginScreen
  })

  const tabNavigator = createBottomTabNavigator({
    HomeStack,
    CameraStack,
    OfferStack,
    ProfileStack
    // LoginStack
  });

  const mainNavigator = createSwitchNavigator({
    // LoginScreen,
    start: loginStack,
    tabNavigator
  })
  const container = createAppContainer(mainNavigator);
  export default container;
  