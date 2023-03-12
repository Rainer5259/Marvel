import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  cancelAnimation,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TouchableButton = Animated.createAnimatedComponent(TouchableOpacity);
const IconAnimated = Animated.createAnimatedComponent(Icon);

const Button = ({
  style,
  IconName,
  size,
  slideToValue,
  showBreathingAnim = false,
  onPress,
  timeOut = 0,
}) => {
  const opacityCurrent = useSharedValue(0.3);
  const sizeCurrent = useSharedValue(size);
  const slide = useSharedValue(0);

  const fontSize = useAnimatedStyle(() => {
    return {fontSize: sizeCurrent.value};
  });

  const opacity = useAnimatedStyle(() => {
    return {opacity: opacityCurrent.value};
  });

  const translateX = useAnimatedStyle(() => {
    return {transform: [{translateX: slide.value}]};
  });

  const startBreathingAnimated = () => {
    withSequence(
      (opacityCurrent.value = withTiming(1, {duration: 2000}, () => {
        showBreathingAnim &&
          (sizeCurrent.value = withRepeat(
            withTiming(size * 1.5, {
              duration: 1000,
            }),
            Infinity,
            true,
          ));
      })),
    );
  };

  useEffect(() => {
    startBreathingAnimated();
  }, []);

  const stopAnimation = () => {
    cancelAnimation(
      (sizeCurrent.value = withTiming(size, {duration: 500}, () => {
        slide.value = withTiming(slideToValue, {duration: 200});
      })),
    );
    return setTimeout(onPress, timeOut);
  };

  return (
    <TouchableButton
      style={[
        {alignItems: 'center', justifyContent: 'center'},
        style,
        opacity,
        translateX,
      ]}
      onPress={stopAnimation}
      r>
      <IconAnimated name={`${IconName}`} style={[fontSize]} />
    </TouchableButton>
  );
};
export default Button;
