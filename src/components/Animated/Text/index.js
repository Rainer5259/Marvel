import React, {useEffect} from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
const AnimatedText = ({children, styles}) => {
  const currentPosition = useSharedValue(-150);
  useEffect(() => {
    return (currentPosition.value = withTiming(0, {
      duration: 1450,
      easing: Easing.bounce,
    }));
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: currentPosition.value}],
    };
  });

  return <Animated.Text style={[styles, titleStyle]}>{children}</Animated.Text>;
};
export default AnimatedText;
