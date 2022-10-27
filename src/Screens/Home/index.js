import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Image, Text} from 'react-native';
import styles from './styles';
import FadeInView from '../../../components/FadeInView';
import IntroductoryPhrase from '../../../components/IntroductoryPhrase';
import Logo from '../../../components/Logo';

import IntroButtonGoToCharctersList from '../../../components/IntroButtonGoToCharctersList';
import LoadingData from '../../../components/LoadingData';

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo color="red" height="256" width="256" />

      <IntroductoryPhrase />

      <IntroButtonGoToCharctersList />
      {/* <LoadingData /> */}
    </View>
  );
};
export default Home;
