import React from 'react';
import {View, TouchableWithoutFeedback, Alert} from 'react-native';
import {Icon, Button, Input, Text} from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import {useNavigation} from '@react-navigation/native';

const FormGenre = (props) => {
  const [genre, setGenre] = React.useState({genre_name: ''});

  const onPressGenre = () => {
    // console.log(props.route.params, 'auth')
    // const token = props.auth.data.token
    // console.log(AsyncStorage.getItem("token"), 'ini token')
    AsyncStorage.getItem("token", (error, result) => {
      // console.log(result)
      axios({
      method: 'POST',
      url: `${API.baseURL}/genres`,
      data: genre,
      headers: {
        Authorization: result
      }
    })
    .then(function (response) {
      console.log(response);
      Alert.alert(
        'Success',
        'create genre success',
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
        'create genre error',
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
        <Text>Name</Text>
        <Input
          placeholder="Genre Name..."
          value={genre.genre_name}
          style={{ width: 300, borderRadius: 50, marginBottom: 20, marginTop: 20 }}
          onChangeText={(nextValue) => setGenre({...genre, genre_name: nextValue})}
        />
        <Button 
          style={{ backgroundColor: '#FF6C37', width: 100, borderRadius: 50 }}
        onPress={onPressGenre} status="info" appearance="outline">
          Save
        </Button>
      </View>
    </>
  );
};

export default FormGenre;
