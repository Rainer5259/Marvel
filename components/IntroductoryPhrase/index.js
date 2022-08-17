import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import FadeInView from '../FadeInView';

const IntroductoryPhrase = () => {
  return (
    <View>
      <FadeInView>
        <Text style={{fontSize: 22, fontWeight: 'bold', right: '75%'}}>
          Become
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', right: '55%'}}>A</Text>
        <Text style={{fontSize: 32, fontWeight: 'bold', right: '65%'}}>
          Hero
        </Text>
      </FadeInView>
    </View>
  );
};
export default IntroductoryPhrase;
