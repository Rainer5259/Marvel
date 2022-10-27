import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FadeInView from '../FadeInView';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const IntroductoryPhrase = () => {
  const titlePosition = useSharedValue(250);

  useEffect(() => {
    setTimeout(() => {
      titlePosition.value = withTiming(0, {duration: 1000});
    }, 2000);
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: titlePosition.value}],
    };
  });

  return (
    <View style={{left: '10%', top: '-10%'}}>
      <Animated.Text style={[styles.title, titleStyle]}>Become</Animated.Text>
      <Animated.Text style={[styles.title, titleStyle]}>A</Animated.Text>
      <Animated.Text style={[styles.title, titleStyle]}>Hero</Animated.Text>
    </View>
  );
};
export default IntroductoryPhrase;
