import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';
import FormGenre from '../form/genre.component';

const ModalGenre = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>Add Genre</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <FormGenre/>
          {/* <Button onPress={() => setVisible(false)}>DISMISS</Button> */}
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalGenre;
