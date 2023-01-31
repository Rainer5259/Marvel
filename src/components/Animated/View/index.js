import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ContentAnimated = Animated.createAnimatedComponent(View);
const ViewAnimated = ({children, position, duration, styles}) => {
  const viewPosition = useSharedValue(position);

  useEffect(() => {
    viewPosition.value = withTiming(0, {duration: duration});
  }, []);

  const viewStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: viewPosition.value}],
    };
  });
  return (
    <ContentAnimated style={[styles, viewStyle]}>{children}</ContentAnimated>
  );
};
export default ViewAnimated;
