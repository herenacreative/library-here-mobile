import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import ListAuthor from '../components/list/ListAuthor.component';

import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import ModalAuthor from '../components/modal/ModalAuthor.component';
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

function AuthorScreen({navigation}) {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Author"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <View style={{flex: 1}}>
        <ModalAuthor />
      </View>
      <View style={{flex: 12}}>
        <ListAuthor />
      </View>
    </SafeAreaView>
  );
}

export default AuthorScreen;

