import React, {useEffect, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Button = ({
  children,
  styles,
  position,
  duration,
  onPress,
  iconName,
  iconSize,
  isAnimated = false,
}) => {
  const titlePosition = useSharedValue(position);

  useEffect(() => {
    titlePosition.value = withTiming(0, duration);
    console.log('renderizei');
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: titlePosition.value}],
    };
  });
  return !isAnimated ? (
    <Animated.View style={titleStyle}>
      <TouchableOpacity style={styles} onPress={() => onPress}>
        <Icon name={iconName} size={iconSize} />
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <TouchableOpacity style={styles} onPress={() => onPress}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;
