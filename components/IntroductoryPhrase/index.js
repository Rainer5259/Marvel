import React from 'react';
import {View} from 'react-native';

import AnimatedText from '../Animated/Text';
import Colors from '../../assets/Colors';

const IntroductoryPhrase = () => {
  return (
    <View style={{left: '10%', top: '-10%'}}>
      <AnimatedText
        position={350}
        duration={2500}
        styles={[Colors.primaryText, {left: '2%'}]}>
        Become
      </AnimatedText>
      <AnimatedText
        position={350}
        duration={2800}
        styles={[Colors.primaryText, {left: '8%'}]}>
        A
      </AnimatedText>
      <AnimatedText
        position={350}
        duration={2600}
        styles={[Colors.title, {left: '1%'}]}>
        Hero
      </AnimatedText>
    </View>
  );
};
export default IntroductoryPhrase;
