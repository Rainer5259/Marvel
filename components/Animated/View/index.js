import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AnimatedView = ({
  children,
  position,
  duration,

  backgroundColor,
  width,
  height,
  alignItems,
  justifyContent,
  flexDirection,
  top,
  left,
  right,
  bottom,
  borderRadius,
  rotate,
}) => {
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
    <Animated.View
      style={[
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          alignItems: alignItems,
          justifyContent: justifyContent,
          flexDirection: flexDirection,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          borderRadius: borderRadius,
          transform: [{rotate: rotate}],
        },
        viewStyle,
      ]}>
      {children}
    </Animated.View>
  );
};
export default AnimatedView;
