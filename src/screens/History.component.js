import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import ListHistory from '../components/list/ListHistory.component';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

function HistoryScreen({navigation}) {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="History"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <ListHistory />
    </SafeAreaView>
  );
}

export default HistoryScreen;
