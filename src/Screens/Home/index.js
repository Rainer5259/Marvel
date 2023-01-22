import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IntroductoryPhrase from '../../../components/IntroductoryPhrase';
import Logo from '../../../components/Logo';
import firebase from '../../../src/Firebase';
import Button from '../../../components/Animated/Button';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [name, setName] = useState(null);
  const navigation = useNavigation();
  const goToCharactersList = () => navigation.navigate('Characters');
  // useEffect(() => {
  //   async function createUser() {
  //     await firebase
  //       .database()
  //       .ref('users/1/users')
  //       .set('Rainer Cordeiro')
  //       .then(value => {
  //         setName(value);
  //       });
  //   }
  //   createUser();
  // }, []);
  return (
    <View style={styles.container}>
      <Logo color="red" height="256" width="256" />
      <IntroductoryPhrase />
      <Button
        arrowDirection={'right'}
        size={48}
        timeOut={1700}
        slideToValue={270}
        showBreathingAnim={true}
        style={{marginTop: '34%'}}
        onPress={goToCharactersList}
      />
    </View>
  );
};
export default Home;
