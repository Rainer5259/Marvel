import React, {useEffect, useState, useMemo, useRef} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../src/components/Characters/ListOfCharacters';
import LoadingData from '../../../src/components/LoadingData';
import api from '../../../src/services/api';
import {TS, KEYS, HASH} from '../../../src/services/validation';

function CharactersScreen() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchName, setSearchName] = useState('');
  // const [offset, setOffset] = useState(0);
  // const limit = 10;
  // const listRef = useRef(null);
  // console.log('renderizou CharactersScreen');
  // const handleEndReached = () => {
  //   setOffset(prev => prev + 10);
  //   // loadCharacters(offset);
  // };
  // const memoizedOffset = useMemo(() => {
  //   return offset;
  // }, [offset]);
  // console.log('memoized offset', memoizedOffset);
  // async function loadCharacters() {
  //   const characters = `/characters?ts=${TS}&apikey=${
  //     KEYS.PUBLIC
  //   }&hash=${HASH}&offset=${memoizedOffset}&${
  //     searchName ? `&nameStartsWith=${searchName}` : ''
  //   }`;
  //   try {
  //     const response = await api.get(characters);
  //     const items = response.data.data.results.slice(offset, offset + limit);
  //     setData(prev => [...prev, ...items]);
  //   } catch (e) {
  //     Alert.alert('Erro ao requisitar dados');
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   if (offset === 0) {
  //     loadCharacters(offset);
  //   }
  // }, [offset]);

  // const memoizedData = useMemo(() => data, [data, searchName]);

  return loading ? (
    <LoadingData />
  ) : (
    <ListOfCharacters setLoading={setLoading} />
  );
}

export default CharactersScreen;
