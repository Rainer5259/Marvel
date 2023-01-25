import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../assets/Colors';
import RotaryButton from '../../Animated/RotaryButton';
import styles from './styles';

const Description = ({children, onPress, info}) => {
  // const description = children;
  const [isHidden, setIsHidden] = useState(true);
  // console.log(isHidden);
  useEffect(() => {
    const createHide = () => {
      info.item.hide = true;
    };
    createHide();
    // console.log(info);
  }, []);

  let hide = info.item.hide;
  const description = isHidden
    ? info.item.description.substring(0, 35)
    : info.item.description;
  const ButtonShowMoreDetails = () => {
    const state = () => {
      let hidden = isHidden ? (hide = false) : (hide = true);
      return setIsHidden(hidden);
    };
    return <RotaryButton onPress={() => state()} />;
  };
  return (
    !description == '' && (
      <View style={styles.description}>
        <Text style={[{marginRight: '8%'}, Colors.description]}>
          {description}
        </Text>
        <ButtonShowMoreDetails />
      </View>
    )
  );
};
export default Description;
