import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home.component';
import DetailsScreen from '../screens/details.component';
import RegisterScreen from '../screens/register.component';
import LoginScreen from '../screens/login.component';
import FormGenre from '../components/form/genre.component';
import FormAuthor from '../components/form/author.component';



const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="Genre" component={FormGenre} />
    <Screen name="Author" component={FormAuthor} />
    <Screen name="Register" component={RegisterScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
