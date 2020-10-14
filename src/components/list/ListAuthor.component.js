import React, { useState, useEffect } from 'react';
import {Button, Icon, List, ListItem, Card, Text, Layout} from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

// const data = new Array(8).fill({
//   title: 'Name Author',
// });

const ListAuthor = () => {
  const [author, setAuthor] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("token", (error, result) => {
      axios({
        method: 'GET',
        url: `${API.baseURL}/authors?page=1&limit=100`,
        headers: {
          Authorization: result
        }
      })
        .then(res => {
          console.log(res, 'r')
          setAuthor(res.data.data.results)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response);
        })
    })
  }, [])

  // const renderItemAccessory = (props) => (<>
  // <Button size="tiny" style={{marginRight: 10}}>Edit</Button>
  // <Button size="tiny">Delete</Button></>);

  // const renderItem = ({author}) => (
  //   <ListItem
  //     title={author.author_name}
  //     accessoryRight={renderItemAccessory}
  //   />
  // );

  return (
    <View>
      <ScrollView>
      {author.map(Author => (
        <>
          <Layout>
            <Card>
              <Text>{Author.author_name}</Text>
              <Button size="tiny" style={{ marginBottom: 10, width: 60 }}>Edit</Button>
              <Button size="tiny" style={{ width: 60 }}>Delete</Button>
            </Card>
          </Layout>
        </>
      ))}
      </ScrollView>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {},
});

export default ListAuthor;
