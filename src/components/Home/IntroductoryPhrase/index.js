import React from 'react';
import {View} from 'react-native';

import AnimatedText from '../../Animated/Text';
import Themes from '../../../assets/Themes';

const IntroductoryPhrase = () => {
  return (
    <View style={{left: '10%', top: '-10%'}}>
      <AnimatedText
        position={350}
        duration={2500}
        styles={[Themes.primaryText, {left: '2%'}]}>
        Become
      </AnimatedText>
      <AnimatedText
        position={350}
        duration={2800}
        styles={[Themes.primaryText, {left: '8%'}]}>
        A
      </AnimatedText>
      <AnimatedText
        position={350}
        duration={2600}
        styles={[Themes.title, {left: '1%'}]}>
        Hero
      </AnimatedText>
    </View>
  );
};
export default IntroductoryPhrase;
