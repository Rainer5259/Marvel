import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

const ModalCustomized = ({children, isVisible, setIsVisible}) => {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      {children}
    </Modal>
  );
};

export default ModalCustomized;
