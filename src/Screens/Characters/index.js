import {debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import LoadingData from '../../../src/components/LoadingData';
import Characters from '../../components/Characters';
import RequestErrorInformation from '../../components/RequestErrorInformation';
import {getMarvelAPI} from '../../services/api';
const CharactersScreen = () => {
  const [data, setData] = useState([]);
  const [characterStartWith, setCharacterStartWith] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [statusCode, setStatusCode] = useState(null);
  const [statusCodeMessage, setStatusCodeMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const setCharacters = response => {
    const characters = response.data.data.results;

    const filteredCharacters =
      searchName !== '' &&
      characters.filter(
        char => !characterStartWith.find(d => d.id === char.id),
      );

    searchName === ''
      ? setData(prevData => [...prevData, ...characters])
      : setCharacterStartWith(prevData => [
          ...filteredCharacters.sort((a, b) => a - b),
          ...prevData.sort((a, b) => a - b),
        ]);

    setStatusCode(response.status);
    return;
  };

  const tryFetchCharacters = () => {
    setIsVisible(prev => !prev);
    if (statusCode !== 200) {
      callAPI();
      return setTimeout(() => {
        statusCode !== 200 && setIsVisible(true);
      }, 2000);
    }
    return;
  };

  const callAPI = async () => {
    await getMarvelAPI('characterss', offset, searchName.toLocaleUpperCase())
      .then(
        response => {
          setStatusCode(response.status);
          setCharacters(response);
          return;
        },
        rejection => {
          if (rejection) {
            setStatusCodeMessage(rejection.response.data.code);
            setStatusCode(rejection.response.status);
          }
        },
      )
      .catch(err => {
        console.log(err);
        setStatusCodeMessage('Unknown Error. Try verify your connection');
      })
      .finally(() => {
        statusCode !== 200 && setLoading(false);
        console.log(statusCode);
      });
  };

  const loadMoreItems = () => {
    setOffset(prev => prev + 10);
  };

  const clearSearch = () => {
    setCharacterStartWith([]);
    setSearchName('');
    setOffset(0);
    return;
  };

  const searchCharacter = debounce(setSearchName, 500);

  useEffect(() => {
    searchName !== '' && setData([]);
    callAPI();
    return;
  }, [offset, searchName]);

  const Content = () => {
    switch (statusCode) {
      case 200: {
        return (
          <Characters
            data={searchName === '' ? data : characterStartWith}
            loadMoreItems={loadMoreItems}
            searchName={searchName}
            setSearchName={searchCharacter}
            offset={offset}
            clearSearch={clearSearch}
          />
        );
      }

      default: {
        return (
          isVisible && (
            <RequestErrorInformation
              style={{textAlign: 'center'}}
              statusCode={statusCode}
              statusCodeMessage={statusCodeMessage}
              tryFetchCharacters={tryFetchCharacters}
            />
          )
        );
      }
    }
  };

  return loading ? <LoadingData /> : <Content />;
};

export default CharactersScreen;
