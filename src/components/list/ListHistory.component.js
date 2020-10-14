import React from 'react';
import {Button, Icon, List, ListItem} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const data = new Array(8).fill({
  title: 'Title Book',
  description: 'Date / Status',
});

const ListHistory = () => {
  const renderItemAccessory = (props) => <Button size="tiny">RETURN</Button>;

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description}`}
      accessoryRight={renderItemAccessory}
    />
  );

  return <List style={styles.container} data={data} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    
  },
});

export default ListHistory;
