import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Description = ({info}) => {
  const [isHidden, setIsHidden] = useState(true);

  const description = isHidden
    ? info.item.description.substring(0, 35)
    : info.item.description;

  useEffect(() => {
    const createHide = async () => {
      info.item.hide = true;
    };
    createHide();
  }, []);

  let hide = info.item.hide;

  const state = () => {
    let hidden = isHidden ? (hide = false) : (hide = true);
    return setIsHidden(hidden);
  };

  return (
    !description == '' && (
      <TouchableOpacity onPress={() => state()}>
        <View style={styles.description}>
          <Text style={{marginRight: '6%'}}>
            {description}
            {isHidden && '...'}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );
};
export default Description;
