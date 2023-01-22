import React, {memo} from 'react';
import {Image} from 'react-native';
import AnimatedView from '../../Animated';
import styles from './styles';

const Thumbnail = ({info}) => {
  const img = {
    path: info.item.thumbnail.path,
    extension: info.item.thumbnail.extension,
  };

  const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;
  const ViewCustom = () => {
    return (
      <AnimatedView position={950}>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.thumbnail}
        />
      </AnimatedView>
    );
  };
  const ViewMemo = React.memo(ViewCustom);
  return <ViewMemo />;
};
export default Thumbnail;
