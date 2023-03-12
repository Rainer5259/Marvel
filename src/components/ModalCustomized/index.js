import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';

const ModalCustomized = ({children, style}) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={[styles.content, style]}>{children}</View>
    </Modal>
  );
};

export default ModalCustomized;
