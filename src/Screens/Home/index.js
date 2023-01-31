import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import IntroductoryPhrase from '../../../src/components/Home/IntroductoryPhrase';
import Logo from '../../components/Home/Logo';
import Button from '../../../src/components/Animated/Button';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const goToCharactersList = () => navigation.navigate('Characters');

  return (
    <View style={styles.container}>
      <Logo color="red" height="256" width="256" />
      <IntroductoryPhrase />
      <Button
        IconName={'arrow-right'}
        size={48}
        timeOut={1000}
        slideToValue={270}
        showBreathingAnim={true}
        style={{marginTop: '34%'}}
        onPress={goToCharactersList}
      />
    </View>
  );
};
export default Home;
