import React, {useEffect, memo, useMemo} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';

import ListOfCharacters from '../Characters/ListOfCharacters';

const ViewCustom = Animated.createAnimatedComponent(View);
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
  const animatedProps = useAnimatedProps(() => {
    return {r: 0};
  });
  return (
    <ViewCustom style={[style, titleStyle]} animatedProps={animatedProps}>
      {children}
    </ViewCustom>
  );
};
export default React.memo(AnimatedView);
