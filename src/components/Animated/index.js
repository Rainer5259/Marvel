import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ViewCustom = Animated.createAnimatedComponent(View);
const AnimatedView = ({children, position, style}) => {
  const viewPosition = useSharedValue(position);

  useEffect(() => {
    setTimeout(() => {
      viewPosition.value = withTiming(0, {duration: 450});
    }, 1000);
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: viewPosition.value}],
    };
  });

  return <ViewCustom style={[style, titleStyle]}>{children}</ViewCustom>;
};
export default AnimatedView;
