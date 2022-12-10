import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {CharactersContext} from '../../../services/contexts/characters';

const Rotate = ({index, rotation}) => {
  const OpacityButton = Animated.createAnimatedComponent(TouchableOpacity);
  const ArrowIcon = Animated.createAnimatedComponent(Icon);
  const {info, set, isHidden} = useContext(CharactersContext);
  const [range, setRange] = useState(0);
  const rotateCurrent = useSharedValue(0);
  const turn = () => {
    isHidden ? setRange(0) : setRange(180);
    return (rotateCurrent.value = withTiming(range, {
      duration: 1650,
    }));
  };
  useEffect(() => {}, [range]);
  const turnButton = () => {
    console.log(isHidden);
    return isHidden
      ? set.setIsHidden((info.data[index].hide = false))
      : set.setIsHidden((info.data[index].hide = true));
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
    <OpacityButton onPress={() => turnButton()}>
      <ArrowIcon name="arrow-up" style={[rotate]} />
    </OpacityButton>
  );
};
export default Rotate;
