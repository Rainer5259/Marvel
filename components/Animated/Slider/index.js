import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SlideView = ({
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
}) => {
  const viewPosition = useSharedValue(position);

  useEffect(() => {
    viewPosition.value = withTiming(0, {duration: duration});
  }, []);

  const titleStyle = useAnimatedStyle(() => {
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
        },
        titleStyle,
      ]}>
      {children}
    </Animated.View>
  );
};
export default SlideView;
