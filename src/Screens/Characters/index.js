import React, {useEffect, useState} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import api from '../../../services/api';
import ListOfCharacters from '../../../components/ListOfCharacters';
import {TS, KEYS, HASH} from '../../../services/validation';
import LoadingData from '../../../components/LoadingData';

function CharactersScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(response.data.data.results);
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
      console.log(JSON.stringify(data, null, 4));
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);

  // const addItemHandler = () => {
  //   let showAllDescription = {state: false};
  //   let newData = data;
  //   console.log(newData);
  //   setData(newData);
  // };
  // addItemHandler();

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <ListOfCharacters data={data} />
  );
}

export default CharactersScreen;
