import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, Image, Animated} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const IntroButtonGoToCharctersList = () => {
  const Animations = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const titlePosition = useSharedValue(250);

    useEffect(() => {
      setTimeout(
        () =>
          Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 4000,
            useNativeDriver: true,
          }).start(),
        3000,
      );
      // setTimeout(() => {
      //   titlePosition.value = withTiming(0, {duration: 1000});
      // }, 2000);
    }, [fadeAnim]);

    const titleStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateX: titlePosition.value}],
      };
    });

    return (
      <Animated.View // Special animatable View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
          top: '10%',
          marginHorizontal: '20%',
        }}>
        {props.children}
      </Animated.View>
    );
  };

  const navigation = useNavigation();
  return (
    <Animations>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListOfCharacters');
        }}>
        <Image
          style={{
            width: 65,
            height: 125,
            resizeMode: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: '10%',
          }}
          source={require('../../assets/img/flash-static.png')}
        />
      </TouchableOpacity>
    </Animations>
  );
};

export default IntroButtonGoToCharctersList;
