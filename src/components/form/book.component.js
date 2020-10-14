import React, { useState, useEffect } from 'react';
import { View, Picker, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { Button, Input, Select, Layout, Icon, TopNavigation, Divider, TopNavigationAction } from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker';


const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const FormBook = ({ navigation }) => {
  const [book, setBook] = React.useState({});
  const [author, setAuthor] = React.useState([]);
  const [genre, setGenre] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState('java');
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  // useEffect(() => {
  //   AsyncStorage.getItem("token", (error, result) => {
  //     axios({
  //       method: 'GET',
  //       url: `${API.baseURL}/authors`,
  //       headers: {
  //         Authorization: result
  //       }
  //     })
  //       .then(res => {
  //         console.log(res, 'resA')
  //         setAuthor(res.data.data.results)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         console.log(error.response);
  //       })
  //   })
  // }, [])

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
          console.log(res, 're')
          setGenre(res.data.data.results)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response);
        })
    })
  }, [])

    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'img', title: 'Choose Photo from Galery' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });

    const onPressBook = () => {
      const options = {
        noData: true,
      };
      const formData = new FormData();
      formData.append('book_name', book.book_name)
      // formData.append('image', book.image)
      formData.append('genre_id', book.genre_id)
      // formData.append('author_id', book.author_id)
      formData.append('description', book.description)
      formData.append('status', book.status)
      formData.append('stock', book.stock)
      AsyncStorage.getItem("token", (error, result) => {
        axios({
          method: 'POST',
          url: `${API.baseURL}/books`,
          data: formData,
          headers: {
            Authorization: result
          }
        })
          .then(function (response) {
            console.log(response);
            AsyncStorage.setItem('token', response.data.data[0].token);
            AsyncStorage.setItem(
              'refreshToken',
              response.data.data[0].refreshToken
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      })
    };
    
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation
            title="Add Book"
            alignment="center"
            accessoryLeft={BackAction}
          />
          <Divider />
          <ScrollView style={styles.scroll}>
            <Layout style={styles.footer}>
              <Layout style={styles.form}>
                
              
          <Input
            label="Title"
            placeholder="Place your Text"
            value={book.book_name}
            onChangeText={(nextValue) =>
              setBook({...book, book_name: nextValue})
            }
          />

          <Image source={this.state.avatarSource} style={styles.uploadAvatar} 
                  source={{
                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                  }}
                  style={{ width: 100, height: 100 }}
 />
                <Image
                  source={{ uri: this.state.filePath.uri }}
                  style={{ width: 250, height: 250 }}
                />
          
          <Text style={{color: 'white'}}>Genre</Text>
          <Picker
            style={{height: 50, width: 310}}
            value={book.genre_id}
            onValueChange={(nextValue) => setBook({...book, genre_id: nextValue})}>
            {genre.map((Genre)=>(
                <Picker.Item
                  label={Genre.genre_name}
                  value={Genre.genre_name}
                  key={Genre.genre_id}
                />//if you have a bunch of keys value pair
            ))}
          </Picker>

          <Input
            label="Stock"
            placeholder="Place your Text"
            value={book.stock}
            onChangeText={(nextValue) => setBook({...book, stock: nextValue})}
          />
          <Input
            label="Status"
            placeholder="Place your Text"
            value={book.status}
            onChangeText={(nextValue) => setBook({...book, status: nextValue})}
          />
          <Input
            label="Description"
            placeholder="Place your Text"
            value={book.description}
            onChangeText={(nextValue) =>
              setBook({...book, description: nextValue})
            }
          />
          <Button onPress={onPressBook} status="info" appearance="outline">
            Save
          </Button>
              </Layout>
            </Layout>
          </ScrollView>
        </SafeAreaView>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: '#FF6C37',
    paddingVertical: 20,
    paddingHorizontal: 30,
    height: 600,
  },
  form: {
    // marginTop: 20,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 30,
  },
});


export default FormBook;
