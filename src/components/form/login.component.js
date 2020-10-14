import React from 'react';
import { View, TouchableHighlight, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Icon, Button, Input, Text } from '@ui-kitten/components';
// import validationComponent from 'react-native-form-validator';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';
import {login} from '../../redux/actions/auth';

const FormLogin = (props) => {

  const [user, setUser] = React.useState({username: '', password: ''});
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const navigation = useNavigation();

  const onPressLogin = () => {
    // validate({
    //   username: { minlength: 3, required: true },
    //   password: { password: true, required: true  },
    // });
    props.login(user).then((response) =>{
      console.log(props, 'pro')
      navigation.navigate('Home');
      AsyncStorage.setItem('token', props.auth.data.token);
      AsyncStorage.setItem(
        'refreshToken',
        response.payload.data.data[0].refreshTokenNew
      );
        // if(response.status ==200){
        // }else{
        //   alert('user or pass not valid')
        // }
    })
    .catch(function (error) {
      Alert.alert(
        'Login Failed',
        'Please enter username and password',
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
      console.log(error)
      console.log(error.response)
    })
    // axios({
    //   method: 'POST',
    //   url: `${API.baseURL}/auth/login`,
    //   data: user
    // })
    // .then(function (response) {
    //   console.log(response)
    //   AsyncStorage.setItem('token', response.data.data[0].token);
    //   AsyncStorage.setItem(
    //     'refreshToken',
    //     response.data.data[0].refreshToken
    //   );
    //     if(response.status ==200){
    //       navigation.navigate('Home');
    //     }else{
    //       alert('user or pass not valid')
    //     }
    // })
    // .catch(function (error) {
    //   console.log(error)
    //   console.log(error.response)
    // })
  }

  const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
      </TouchableWithoutFeedback>
  );

    return (
      <>
        <TouchableHighlight style={styles.container}>
        <View>
            <Text style={styles.label}>Username</Text>
          <Input
            style={styles.input}
            placeholder="Place your Text"
            value={user.username}
            onChangeText={(nextValue) =>
              setUser({...user, username: nextValue})
            }
          />
            <Text style={styles.label}>Password</Text>
          <Input
            style={styles.input}
            placeholder="Place your Text"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) =>
              setUser({...user, password: nextValue})
            }
          />
            {/* <Text style={styles.label}>* Should contain at least 8 symbols</Text> */}
            <Button onPress={onPressLogin} style={styles.button} appearance='outline'>
            Login
          </Button>
        </View>
        </TouchableHighlight>
      </>
    );
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {login}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#FF6C37', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  label: {
    color: '#2B335A',
    fontWeight: 'bold'
  },
  input: { 
    width: 300 
  },
  button: { 
    borderBottomColor: '#2B335A',
    marginTop: 20 
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
