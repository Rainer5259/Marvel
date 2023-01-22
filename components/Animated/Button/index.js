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

const Button = ({
  style,
  arrowDirection,
  size,
  slideToValue,
  showBreathingAnim = false,
  onPress,
  timeOut = 0,
}) => {
  const TouchableButton = Animated.createAnimatedComponent(TouchableOpacity);
  const IconAnimated = Animated.createAnimatedComponent(Icon);

  const opacityCurrent = useSharedValue(0);
  const sizeCurrent = useSharedValue(size);
  const slide = useSharedValue(0);

  //Estilos animados
  //Tamanho de Icon também pode ser passado no styles com a propriedade "fontSize"
  const fontSize = useAnimatedStyle(() => {
    return {fontSize: sizeCurrent.value};
  });

  const opacity = useAnimatedStyle(() => {
    return {opacity: opacityCurrent.value};
  });

  const translateX = useAnimatedStyle(() => {
    return {transform: [{translateX: slide.value}]};
  });

  useEffect(() => {
    const startBreathingAnim = () => {
      withSequence(
        (opacityCurrent.value = withTiming(1, {duration: 2000}, () => {
          showBreathingAnim &&
            (sizeCurrent.value = withRepeat(
              withTiming(72, {
                duration: 2000,
              }),
              Infinity,
              true,
            ));
        })),
      );
    };
    startBreathingAnim();
  }, []);

  const stopAnimation = () => {
    const stopAnimation = cancelAnimation(
      (sizeCurrent.value = withTiming(size, {duration: 800}, () => {
        slide.value = withTiming(slideToValue, {duration: 500});
      })),
    );

    stopAnimation, setTimeout(onPress, timeOut);
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
      onPressOut={(slide.value = withTiming(0))}>
      <IconAnimated name={`arrow-${arrowDirection}`} style={[fontSize]} />
    </TouchableButton>
  );
};
export default Button;
