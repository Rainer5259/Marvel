import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import FadeInView from '../FadeInView';

const IntroButtonGoToCharctersList = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        height: 125,
        width: 65,
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        navigation.navigate('ListOfCharacters');
      }}>
      <FadeInView>
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
      </FadeInView>
    </TouchableOpacity>
  );
};
export default IntroButtonGoToCharctersList;
