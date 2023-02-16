import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Description = ({info}) => {
  const [isHidden, setIsHidden] = useState(true);
  const {item} = info;
  const description = isHidden
    ? item.description.substring(0, 35)
    : item.description;

  let hide = item.hide;

  const state = () => {
    let hidden = isHidden ? false : true;
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
