import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import {
    Button,
    Divider,
    Layout,
    TopNavigation,
    Icon,
    Text,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const AuthScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title="MyApp" alignment="center" />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image/>
            </Layout>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text icon={PersonIcon} >
                    Ready to discover teh world?
                </Text>
            </Layout>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={styles.button} appearance='filled'>
                    Login
                </Button>
                <Button onPress={navigateRegister} style={styles.button} appearance='outline'>
                    Register
                </Button>
            </Layout>
        </SafeAreaView>
    );
};

export default AuthScreen;