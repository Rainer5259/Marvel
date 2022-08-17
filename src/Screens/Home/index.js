import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Image, Text} from 'react-native';
import styles from './styles';
import FadeInView from '../../../components/FadeInView';
import IntroductoryPhrase from '../../../components/IntroductoryPhrase';
import Logo from '../../../components/Logo';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import IntroButtonGoToCharctersList from '../../../components/IntroButtonGoToCharctersList';
import LoadingData from '../../../components/LoadingData';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Home = () => {
  return (
    <View style={styles.container}>
      <FadeInView>
        <Logo color="red" height="256" width="256" />
      </FadeInView>
      <IntroductoryPhrase />

      <IntroButtonGoToCharctersList />
      <LoadingData />
    </View>
  );
};
export default Home;
