import {debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import LoadingData from '../../../src/components/LoadingData';
import Characters from '../../components/Characters';
import {getMarvelAPI} from '../../services/api';
const CharactersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const callAPI = () => {
      getMarvelAPI('characters', offset, searchName)
        .then(characters => {
          setData(prev => [...prev, ...characters]);
        })
        .finally(() => setLoading(false));
    };
    callAPI();
  }, [offset]);
  const loadMoreItems = debounce(() => setOffset(prev => prev + 10), 100);

  const searchCharacter = debounce(setSearchName, 1500);

  return loading ? (
    <LoadingData />
  ) : (
    <Characters
      data={data}
      loadMoreItems={loadMoreItems}
      searchName={searchName}
      setSearchName={searchCharacter}
    />
  );
};

export default CharactersScreen;
