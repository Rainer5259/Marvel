import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../assets/Colors';
import RotaryButton from '../../Animated/RotaryButton';
import styles from './styles';

const Description = ({children}) => {
  // const description = children;
  const [isHidden, setIsHidden] = useState(true);
  const startRotation = i => {
    return isHidden
      ? (isHidden[i].hidden = false)
      : (isHidden[i].hidden = true);
  };

  const ButtonShowMoreDetails = () => {
    return (
      <RotaryButton
      // onPress={() => {
      //   startRotation(children.index);
      // }}
      />
    );
  };
  return (
    !children == '' && (
      <View style={styles.description}>
        <Text style={[{marginRight: '8%'}, Colors.description]}>
          {children}
        </Text>
        <ButtonShowMoreDetails />
      </View>
    )
  );
};
export default Description;
