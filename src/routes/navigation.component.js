import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/home.component';
import DetailsScreen from '../screens/details.component';
import RegisterScreen from '../screens/register.component';
import LoginScreen from '../screens/login.component';
import FormGenre from '../components/form/genre.component';
import FormAuthor from '../components/form/author.component';
import HistoryScreen from '../screens/History.component';
import ProfileScreen from '../screens/Profile.component';
import BookScreen from '../screens/book.component';
import AuthorScreen from '../screens/Author.component';
import FormBook from '../components/form/book.component';
import GenreScreen from '../screens/Genre.component';



// const {Navigator, Screen} = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }}/>
    <HomeStack.Screen name="Home" component={TabNavigator}/>
    <HomeStack.Screen name="Details" component={DetailsScreen} />
    <HomeStack.Screen name="Register" component={RegisterScreen} />
    <HomeStack.Screen name="FormBooks" component={FormBook} />
    
  </HomeStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={DrawerNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Genre" component={GenreScreen} />
    <Drawer.Screen name="Book" component={BookScreen} />
    <Drawer.Screen name="Author" component={AuthorScreen} />
  </Drawer.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
    {/* <Stack.Navigator name="">
      <HomeNavigator />
    </Stack.Navigator> */}
    {/* <Stack.Navigator>
      <TabNavigator />
    </Stack.Navigator>
    <Stack.Navigator>
      <DrawerNavigator />
    </Stack.Navigator>
     */}
  </NavigationContainer>
);
