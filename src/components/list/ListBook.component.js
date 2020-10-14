import React, { useState, useEffect }  from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import {Card, Icon, List, Text, Button, Layout, TopNavigation, Divider, TopNavigationAction} from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
// const data = new Array(8).fill({
//   title: 'Item',
// });
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;


const ListBook = () => {
  const [book, setBook] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("token", (error, result) => {
      axios({
        method: 'GET',
        url: `${API.baseURL}/books`,
        headers: {
          Authorization: result
        }
      })
        .then(res => {
          setBook(res.data.data.results)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response);
        })
    })
  }, [])

  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateFormBook = () => {
    navigation.navigate('FormBooks');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <Layout>
      <TopNavigation
        title="List Book"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView>
        <Layout>
          <Button onPress={navigateFormBook}>Add Book</Button>
        </Layout>
        <Layout style={styles.container} level="1">
          {book.map((Book) => (
            <Card onPress={() => navigation.navigate('Details', { book_id: Book.book_id })}>
              <Layout style={styles.layout}>
                <Image
                  style={styles.images}
                  source={{
                    uri: `http://192.168.1.7:8080/uploads/${Book.image}`
                  }}
                />
                <Layout key={book.book_id} style={styles.text}>
                  <Text style={styles.title}>{Book.book_name}</Text>
                  <Text>{Book.genre_name}</Text>
                </Layout>
              </Layout>
            </Card>
          ))}
        </Layout>
      </ScrollView>
    </Layout>

      
   
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 600,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  images: {
    width: 60,
    height: 80,
  },

  layout: {
    width: 60,
    height: 150,
    margin: 5,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
});

export default ListBook;