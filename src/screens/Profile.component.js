import React from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import FormLogin from '../components/form/login.component';
import {LogoLogin} from '../assets/ilustration';

const ProfileScreen = ({navigation}) => {
  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Layout style={styles.header}>
          <LogoLogin width={150} height={150} />
        </Layout>
        <ScrollView style={styles.scroll}>
          <Layout style={styles.footer}>
            <Text style={styles.textFooter}>Sinta Herena</Text>
            <Layout style={styles.form}>
              {/* <FormLogin /> */}
            </Layout>
            <Button
              onPress={navigateRegister}
              style={styles.button}
              appearance="outline">
              Logout
            </Button>
          </Layout>
        </ScrollView>
      </Layout>
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
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#FF6C37',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  textFooter: {
    color: '#2B335A',
    fontWeight: 'bold',
    fontSize: 30,
  },
  form: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2B335A',
    borderBottomColor: '#2B335A',
    marginTop: 10,
    borderRadius: 20
  },
});

export default ProfileScreen;