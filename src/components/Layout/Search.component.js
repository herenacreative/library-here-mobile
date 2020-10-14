import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Icon,
  Input,
  IndexPath,
  Layout,
  Select,
  SelectGroup,
  SelectItem,
} from '@ui-kitten/components';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const sort = ['Developer', 'Designer', 'Product Manager'];
const time = ['Developer', 'Designer', 'Product Manager'];

const SearchScreen = () => {
  const [value, setValue] = React.useState('');
   const [selectedIndex, setSelectedIndex] = React.useState(
     new IndexPath(0, 1),
   );
   const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([
     new IndexPath(0, 0),
     new IndexPath(1, 1),
   ]);


  return (
    <Layout style={styles.container}>
      <Layout style={styles.search}>
        <Input
          value={value}
          placeholder="Search..."
          captionIcon={AlertIcon}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
      </Layout>
      <Layout style={styles.sort} level="1">
        <Select
          style={styles.select}
          placeholder="Default"
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          <SelectItem title="Option 1.1" />
          <SelectItem title="Option 1.2" />
          <SelectItem title="Option 1.3" />
        </Select>

        <Select
          style={styles.select}
          placeholder="Default"
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          <SelectItem title="Option 1.1" />
          <SelectItem title="Option 1.2" />
          <SelectItem title="Option 1.3" />
        </Select>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6C37',
  },
  search: {
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    backgroundColor: '#FF6C37',
  },
  sort: {
    backgroundColor: '#FF6C37',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 50,
    padding: 6,
  },
  select: {
    flex: 1,
    margin: 3,
  }
});

export default SearchScreen;