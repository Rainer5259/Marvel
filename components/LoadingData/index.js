import React, {useState, useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';
import icons from './path';

const LoadingData = () => {
  const [icon, setIcon] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeIcon = () => {
    const random = Math.floor(Math.random() * icons.length);
    setIcon(icons[random]);
  };
  changeIcon();
  console.log(icon);
  // changeIcon();
  return (
    <Svg fill="#000000" viewBox="0 0 48 48" width="64px" height="64px">
      <Path d={icon} />
    </Svg>
  );
};
export default LoadingData;
