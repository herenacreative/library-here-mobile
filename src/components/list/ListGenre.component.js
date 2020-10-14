import React, { useState, useEffect } from 'react';
import {Button, Icon, List, ListItem, Card, Text, Layout} from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

// const data = new Array(8).fill({
//   title: 'Name genre',
// });

const ListGenre = (props, route) => {

  console.log(route, 'pg', props)
  const [genre, setGenre] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("token", (error, result) => {
      axios({
        method: 'GET',
        url: `${API.baseURL}/genres?page=1&limit=100`,
        headers: {
          Authorization: result
        }
      })
        .then(res => {
          console.log(res, 'r')
          setGenre(res.data.data.results)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response);
        })
    })
  }, [])
  return (
    <View >
      <ScrollView>
        <Layout style={styles.container}>
          {genre.map(Genre => (
            <>
              <Layout style={styles.layout}>
                <Card>
                  <Text>{Genre.genre_name}</Text>
                  <Button size="tiny" style={{ marginBottom: 10, width: 60 }}>Edit</Button>
                  <Button size="tiny" style={{ width: 60 }}>Delete</Button>
                </Card>
              </Layout>
            </>
          ))}
        </Layout>
      </ScrollView>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  layout: {
    width: 120,
    height: 140,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ListGenre;
