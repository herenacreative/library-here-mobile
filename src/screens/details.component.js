import React, { useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import API from '../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import CardDetail from '../components/card/CardDetail.component';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const DetailsScreen = ({navigation, route}) => {
// console.log(route, 'route')
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Detail"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <CardDetail route={route.params.book_id}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});

export default DetailsScreen
