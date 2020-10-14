import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from '@ui-kitten/components';
import CardBookScreen from '../components/card/CardBook.component';
import SearchScreen from '../components/Layout/Search.component';

export const HomeScreen = ({navigation}) => {
   const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const navigateBooks = () => {
    navigation.navigate('Books');
  };
  const navigateAuthor = () => {
    navigation.navigate('Author');
  };
  const navigateHistory = () => {
    navigation.navigate('History');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };
  const navigateGenre = () => {
    navigation.navigate('Genre');
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1}}>
        <SearchScreen />
        <CardBookScreen />
      </Layout>
    </SafeAreaView>
  );
};
