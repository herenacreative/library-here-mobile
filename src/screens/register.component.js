import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button
} from '@ui-kitten/components';
import { LogoLogin } from '../assets/ilustration';
import FormRegister from '../components/form/register.component';


const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const RegisterScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider /> */}
      <Layout style={styles.container}>
        <Layout style={styles.header}>
          <Text style={styles.textFooter}>Register Now !</Text>
        </Layout>
        <ScrollView style={styles.scroll}>
          <Layout style={styles.footer}>
            <Layout style={styles.form}>
              <FormRegister />
            </Layout>
            <Button onPress={navigateBack} style={styles.button} appearance='outline'>
              Login
          </Button>
          </Layout>
        </ScrollView>
      </Layout>
      {/* <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FormRegister/>
      </Layout> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: '#FF6C37',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  textFooter: {
    color: '#FF6C37',
    fontWeight: 'bold',
    fontSize: 30
  },
  form: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#2B335A',
    borderBottomColor: '#2B335A',
    marginTop: 10,
     borderRadius: 15,
  }
});

export default RegisterScreen
