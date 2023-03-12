import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const OpacityView = Animated.createAnimatedComponent(View);

const OpacityAnimated = ({children, style}) => {
  const opacity = useSharedValue(0);

  const fade = () => {
    withSequence(
      (opacity.value = withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        Infinity,
        true,
      )),
    );
  };

  useEffect(() => {
    fade();
  }, []);

  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return <OpacityView style={[opacityAnimated, style]}>{children}</OpacityView>;
};
export default OpacityAnimated;
