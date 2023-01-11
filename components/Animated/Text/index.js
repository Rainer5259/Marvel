import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
const AnimatedText = ({children, styles, position}) => {
  const currentPosition = useSharedValue(position);

  setTimeout(() => {
    currentPosition.value = withTiming(0, {
      duration: 450,
      easing: Easing.bounce,
    });
  }, 1000);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: currentPosition.value}],
    };
  });

  return <Animated.Text style={[styles, titleStyle]}>{children}</Animated.Text>;
};
export default AnimatedText;
