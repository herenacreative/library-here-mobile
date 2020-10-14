import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import ListGenre from '../components/list/ListGenre.component';

import {
    Divider,
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import ModalGenre from '../components/modal/ModalGenre.component';
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

function GenreScreen({ navigation }) {
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Genre"
                alignment="center"
                accessoryLeft={BackAction}
            />
            <Divider />
            <View style={{ flex: 1 }}>
                <ModalGenre />
            </View>
            <View style={{ flex: 12 }}>
                <ListGenre />
            </View>
        </SafeAreaView>
    );
}

export default GenreScreen;

