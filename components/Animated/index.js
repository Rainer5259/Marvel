import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AnimatedView = ({children, position, style}) => {
  const viewPosition = useSharedValue(position);

  useEffect(() => {
    viewPosition.value = withTiming(0, {duration: 450});
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: viewPosition.value}],
    };
  });
  return <Animated.View style={[style, titleStyle]}>{children}</Animated.View>;
};
export default AnimatedView;
