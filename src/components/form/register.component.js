import React from 'react';
import { View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, Alert} from 'react-native';
import { Button, Input, Icon, Card } from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const FormRegister = () => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [user,setUser] = React.useState({username: '', password:'', email:'', fullname:'', image:''})

    const onPressRegister = () =>{
        axios({
          method: 'POST',
          url: `${API.baseURL}/auth/register`,
          data: user,
        })
        .then(function (response) {
        console.log(response)
         Alert.alert(
           'Success',
           'create user success',
           [
             {
               text: 'Cancel',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel',
             },
             {text: 'OK', onPress: () => console.log('OK Pressed')},
           ],
           {cancelable: false},
         );
        })
        .catch(function (error) {
        console.log(error)
        })
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
        <TouchableHighlight>
          <Card style={styles.container}>
          <Input
            label="Username"
            placeholder="Place your Text"
            value={user.username}
            onChangeText={(nextValue) =>
              setUser({...user, username: nextValue})
            }
          />
          <Input
            label="Fullname"
            placeholder="Place your Text"
            value={user.fullname}
            onChangeText={(nextValue) =>
              setUser({...user, fullname: nextValue})
            }
          />
          <Input
            value={user.password}
            label="Password"
            placeholder="Place your Text"
            caption="Should contain at least 8 symbols"
            accessoryRight={renderIcon}
            captionIcon={AlertIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) =>
              setUser({...user, password: nextValue})
            }
          />
          <Input
            label="Email"
            placeholder="Place your Text"
            value={user.email}
            onChangeText={(nextValue) =>
              setUser({...user, email: nextValue})
            }
          />
          {/* <Input
            label="Image"
            placeholder="Place your Text"
            value={user.image}
          /> */}
            <Button style={styles.button} onPress={onPressRegister} appearance="outline">
            Register
          </Button>
        </Card>
        </TouchableHighlight>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: 300
  },
  button: {
    borderBottomColor: '#2B335A',
    borderRadius: 15,
    marginTop: 10,
  },
})

export default FormRegister;
