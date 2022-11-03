import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Rotate = ({onPress, styles, boolean = true}) => {
  const [state, setState] = useState(boolean);
  const [range, setRange] = useState(0);

  const rotateCurrentValue = useSharedValue(range);

  const OpacityButton = Animated.createAnimatedComponent(TouchableOpacity);
  const ArrowIcon = Animated.createAnimatedComponent(Icon);

  useEffect(() => {});
  const startRotateArrowButton = () => {
    state
      ? (setRange(180), setState((boolean = false)))
      : (setRange(0), setState((boolean = true)));
    return (rotateCurrentValue.value = withTiming(range, {
      duration: 100,
    }));
  };

  const rotate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotateCurrentValue.value}deg`,
        },
      ],
    };
  });

  return (
    <OpacityButton onPress={() => startRotateArrowButton()}>
      <ArrowIcon name="arrow-up" style={[styles, rotate]} />
    </OpacityButton>
  );
};
export default Rotate;
//47
