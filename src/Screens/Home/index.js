import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IntroductoryPhrase from '../../../components/IntroductoryPhrase';
import Logo from '../../../components/Logo';
import firebase from '../../../src/Firebase';
import ArrowButton from '../../../components/Animated/ArrowButton';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [name, setName] = useState(null);
  const goToCharactersList = () => useNavigation().navigate('ListOfCharacters');
  useEffect(() => {
    async function createUser() {
      await firebase
        .database()
        .ref('users/1/users')
        .set('Rainer Cordeiro')
        .then(value => {
          setName(value);
        });
    }
    createUser();
  }, []);
  return (
    <View style={styles.container}>
      <Logo color="red" height="256" width="256" />
      <IntroductoryPhrase />
      <Text>{name}</Text>
      <ArrowButton
        arrowDirection={'right'}
        size={48}
        timeOut={1700}
        slideToValue={270}
        showBreathingAnim={true}
        styles={{marginTop: '34%'}}
        Pressed={goToCharactersList}
      />
    </View>
  );
};
export default Home;
