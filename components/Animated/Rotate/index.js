import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {CharactersContext} from '../../../services/contexts/characters';

const Rotate = ({index}) => {
  const OpacityButton = Animated.createAnimatedComponent(TouchableOpacity);
  const ArrowIcon = Animated.createAnimatedComponent(Icon);
  const {info, set, isHidden} = useContext(CharactersContext);
  const [range, setRange] = useState(0);
  const rotateCurrentValue = useSharedValue(range);

  const startRotateArrowButton = () => {
    console.log(index, isHidden, info.data[index].hide);

    return (
      !isHidden
        ? (set.setIsHidden((info.data[index].hide = true)), setRange(0))
        : (set.setIsHidden((info.data[index].hide = false)), setRange(180)),
      (rotateCurrentValue.value = withTiming(range, {
        duration: 100,
      }))
    );
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
    <OpacityButton onPress={startRotateArrowButton}>
      <ArrowIcon name="arrow-up" style={[rotate]} />
    </OpacityButton>
  );
};
export default Rotate;
