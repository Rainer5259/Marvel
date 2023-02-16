import {debounce} from 'lodash';
import React, {useEffect, useState, useMemo} from 'react';
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
  console.log(loading);
  const loadMoreItems = debounce(() => setOffset(prev => prev + 10), 100);

  const debouncedSearchName = useMemo(() => debounce(setSearchName, 500), []);

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
