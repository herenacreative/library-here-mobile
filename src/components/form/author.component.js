import React from 'react';
import {View, TouchableWithoutFeedback, Alert} from 'react-native';
import {Icon, Button, Input, Text} from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import {useNavigation} from '@react-navigation/native';

const FormAuthor = (props) => {
  const [author, setAuthor] = React.useState({author_name: ''});

  const onPressGenre = () => {
    // console.log(props.route.params, 'auth')
    // const token = props.auth.data.token
    // console.log(AsyncStorage.getItem("token"), 'ini token')
    AsyncStorage.getItem("token", (error, result) => {
      // console.log(result)
      axios({
      method: 'POST',
      url: `${API.baseURL}/authors`,
      data: author,
      headers: {
        Authorization: result
      }
    })
    .then(function (response) {
      console.log(response);
      Alert.alert(
        'Success',
        'create author success',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
      // AsyncStorage.setItem('token', response.data.data[0].token);
      // AsyncStorage.setItem(
      //   'refreshToken',
      //   response.data.data[0].refreshToken
      // );
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert(
        'Error',
        'create author error',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    });
    })
    
  };

  return (
    <>
      <View>
        <Text style={{color: '#FF6C37'}}>Author</Text>
        <Input
          style={{width: 300, borderRadius:50, marginBottom: 20, marginTop:20}}
          placeholder="Name..."
          value={author.author_name}
          onChangeText={(nextValue) =>
            setAuthor({...author, author_name: nextValue})
          }
        />
        <TouchableWithoutFeedback>
          <Button
          onPress={onPressGenre}
          style={{backgroundColor: '#FF6C37', width:100, borderRadius:50}}
          appearance="outline">
          Save
        </Button>
        </TouchableWithoutFeedback>
        
      </View>
    </>
  );
};

export default FormAuthor;
