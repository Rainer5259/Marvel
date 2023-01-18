import React from 'react';
import {Text} from 'react-native';

export default function Title({children, style}) {
  return <Text style={[style]}>{children}</Text>;
}
