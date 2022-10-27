import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Button = ({
  backgroundColor,
  width,
  height,
  alignItems,
  justifyContent,
  top,
  bottom,
  borderRadius,
  iconName,
  iconSize,
  onPress,
  isAnimated,
}) => {
  isAnimated = false;
  const titlePosition = useSharedValue(250);

  useEffect(() => {
    titlePosition.value = withTiming(0, {duration: 1000});
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: titlePosition.value}],
    };
  });
  return !isAnimated ? (
    <Animated.View style={titleStyle}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          alignItems: alignItems,
          justifyContent: justifyContent,
          top: top,
          bottom: bottom,
          borderRadius: borderRadius,
        }}
        onPress={() => onPress}>
        <Icon name={iconName} size={iconSize} />
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        alignItems: alignItems,
        justifyContent: justifyContent,
        top: top,
        bottom: bottom,
        borderRadius: borderRadius,
      }}
      onPress={() => onPress}>
      <Icon name={iconName} size={iconSize} />
    </TouchableOpacity>
  );
};
export default Button;
