import React, {useEffect, useContext} from 'react';
import ListOfCharacters from '../../../components/ListOfCharacters';
import {CharactersContext} from '../../../services/contexts/characters';
import LoadingData from '../../../components/LoadingData';

function CharactersScreen() {
  const {loadingStatus} = useContext(CharactersContext);
  return loadingStatus ? <LoadingData /> : <ListOfCharacters />;
}
export default CharactersScreen;
