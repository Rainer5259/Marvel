import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LoadingData from '../LoadingData';
import ModalCustomized from '../ModalCustomized';
import styles from './styles';

const RequestErrorInformation = ({
  statusCode,
  statusCodeMessage,
  tryFetchCharacters,
}) => {
  console.log(statusCode);
  return (
    <ModalCustomized>
      <View>
        <LoadingData />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>An error has occurred...</Text>
        <Text style={styles.statusCode}>
          {statusCode !== null && statusCode !== undefined
            ? `${statusCode} - ${statusCodeMessage}`
            : `${statusCodeMessage}`}
        </Text>
      </View>
      <TouchableOpacity onPress={() => tryFetchCharacters()}>
        <Text style={styles.fetchButton}>Try to fetch again</Text>
      </TouchableOpacity>
    </ModalCustomized>
  );
};
export default RequestErrorInformation;
