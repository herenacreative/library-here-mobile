import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Divider, Drawer, DrawerItem, Icon} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../../../assets/image/undraw_Bibliophile_hwqc.svg')}
    />
    <Divider />
  </React.Fragment>
);

const DrawerMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem
        title="Books"
        accessoryLeft={PersonIcon}
        component={BookScreen}
      />
      <DrawerItem
        title="Authors"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
        component={AuthorScreen}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerMenu;
