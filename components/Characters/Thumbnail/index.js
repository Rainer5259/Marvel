import React, {memo} from 'react';
import {useEffect} from 'react';
import {Image} from 'react-native';
import AnimatedView from '../../Animated';
import styles from './styles';

const Thumbnail = ({info, position}) => {
  const img = {
    path: info.item.thumbnail.path,
    extension: info.item.thumbnail.extension,
  };
  const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;
  useEffect(() => {
    console.log('Atualizei a thumbnail');
  }, []);
  return (
    <AnimatedView position={position}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={styles.thumbnail}
      />
    </AnimatedView>
  );
};

export default Thumbnail;
