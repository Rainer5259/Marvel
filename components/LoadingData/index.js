import React, {useState, useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';
import icons from './path';

const LoadingData = () => {
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   function timerToChangeRandomIcon() {
  //     let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  //     let timeOut = setTimeout(() => {
  //       setIcon(randomIcon);
  //     }, 2000);
  //     return timeOut;
  //   }
  //   loading && timerToChangeRandomIcon();
  // }, [icon]);
  // function timerToChangeIcon() {
  //   let icone = icons[Math.floor(Math.random() * icons.length)];
  //   setIcon(icone);
  //   return console.log(icon);
  // }
  // setInterval(() => {
  //   timerToChangeIcon();
  // }, 3000);
  return (
    <Svg fill="#000000" viewBox="0 0 48 48" width="48px" height="48px">
      <Path d={icon} />
    </Svg>
  );
};
export default LoadingData;
