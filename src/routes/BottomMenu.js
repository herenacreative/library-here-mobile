import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   BottomNavigation,
//   BottomNavigationTab,
//   Layout,
//   Text,
// } from '@ui-kitten/components';
import { Author } from '../screens/Author';
import {BookScreen} from '../screens/book.component';


const {Navigator, Screen} = createBottomTabNavigator();

// const UsersScreen = () => (
//   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text category="h1">USERS</Text>
//   </Layout>
// );

// const OrdersScreen = () => (
//   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text category="h1">ORDERS</Text>
//   </Layout>
// );

// const BottomTabBar = ({navigation, state}) => (
//   <BottomNavigation
//     selectedIndex={state.index}
//     onSelect={(index) => navigation.navigate(state.routeNames[index])}>
//     <BottomNavigationTab title="USERS" />
//     <BottomNavigationTab title="ORDERS" />
//   </BottomNavigation>
// );

const TabNavigator = () => (
  <Navigator>
    <Screen name="Books" component={BookScreen} />
    <Screen name="Authors" component={Author} />
  </Navigator>
);

export const BottomMenu = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
