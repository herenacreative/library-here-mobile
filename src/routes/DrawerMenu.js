import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Layout,
  Text,
  IndexPath,
} from '@ui-kitten/components';
import Book from '../screens/book.component';
import Author from '../screens/Author';

const {Navigator, Screen} = createDrawerNavigator();

const BookScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   <Book/>
  </Layout>
);

const AuthorScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Author/>
  </Layout>
);

const DrawerContent = ({navigation, state}) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Books" />
    <DrawerItem title="Authors" />
  </Drawer>
);

const DrawerNavigator = () => (
         <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
           <Screen name="Books" component={BookScreen} />
           <Screen name="Authors" component={AuthorScreen} />
         </Navigator>
       );

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
