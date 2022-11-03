import React, {useEffect, useMemo, useState} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import api from '../../../services/api';
import ListOfCharacters from '../../../components/ListOfCharacters';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(
        response.data.data.results,
        response.data.data.results.map((e, i, a) => (a[i].hide = true)),
      );
      // console.log(JSON.stringify(data.length, null, 3));
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
    }
  }
  // data[19].hide = false;
  useEffect(() => {
    loadCharacters();
  }, []);
  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <ListOfCharacters data={data} />
  );
}

export default CharactersScreen;
