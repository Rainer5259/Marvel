import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const RotaryButton = ({info, onPress}) => {
  const OpacityButton = Animated.createAnimatedComponent(TouchableOpacity);
  const ArrowIcon = Animated.createAnimatedComponent(Icon);
  const [hide, setHide] = useState(info.item.hide);
  let value = hide ? 0 : 180;
  const rotateCurrent = useSharedValue(value);
  const startRotation = () => {
    onPress;
    hide ? setHide(false) : setHide(true);
    // console.log(info.item.hide);

    return (rotateCurrent.value = withTiming(value, {duration: 300}));
  };

  const rotate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotateCurrent.value}deg`,
        },
      ],
    };
  });
  return (
    <OpacityButton
      // onPress={onPress}
      onPress={() => startRotation()}>
      <ArrowIcon name="arrow-up" style={[rotate]} />
    </OpacityButton>
  );
};
export default RotaryButton;
