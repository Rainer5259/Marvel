import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const RotaryButton = ({onPress, value}) => {
  const OpacityButton = Animated.createAnimatedComponent(TouchableOpacity);
  const ArrowIcon = Animated.createAnimatedComponent(Icon);
  const rotateCurrent = useSharedValue(180);
  const [isOn, setIsOn] = useState(value);
  const [currentValue, setCurrentValue] = useState(0);

  const rotate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotateCurrent.value}deg`,
        },
      ],
    };
  });
  const startRotation = () => {
    isOn ? setCurrentValue(180) : setCurrentValue(0);
    return (rotateCurrent.value = withTiming(currentValue, {duration: 300}));
  };
  return (
    <OpacityButton
      // onPress={onPress}
      onPress={(() => startRotation(), onPress)}>
      <ArrowIcon name="arrow-up" style={[rotate]} />
    </OpacityButton>
  );
};
export default RotaryButton;
