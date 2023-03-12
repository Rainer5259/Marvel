import axios from 'axios';
import {Alert, View, Text} from 'react-native';
import {
  TIMESTAMP,
  MARVEL_API_KEYS,
  MARVEL_HASH,
} from '../../src/services/validation';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

async function getMarvelAPI(searchBy, offset, searchName) {
  const auth = `&ts=${TIMESTAMP}&apikey=${MARVEL_API_KEYS.PUBLIC}&hash=${MARVEL_HASH}`;

  const nameStartsWith =
    !searchName == '' ? `nameStartsWith=${searchName}` : '';

  const characters = `/${searchBy}?${nameStartsWith}&limit=10&offset=${offset}${auth}`;

  const response = await api.get(characters);
  try {
    return response;
  } catch (e) {
    console.log('Caiu no Catch do AXIOS');
    return response.status;
  }
}

export {getMarvelAPI};
