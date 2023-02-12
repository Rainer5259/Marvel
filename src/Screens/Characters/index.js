import {debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import LoadingData from '../../../src/components/LoadingData';
import Characters from '../../components/Characters';
import {getCharacters} from '../../services/api';
const CharactersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getCharacters(offset, searchName)
      .then(characters => {
        setData(prev => [...prev, ...characters]);
      })
      .finally(() => setLoading(false));
  }, [offset]);

  const loadMoreItems = () => setOffset(prev => prev + 10);

  return loading ? (
    <LoadingData />
  ) : (
    <Characters
      data={data}
      loadMoreItems={loadMoreItems}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
};

export default CharactersScreen;
