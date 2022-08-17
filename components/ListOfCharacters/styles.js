import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa2a2a',
    borderRightWidth: 5,
    borderColor: 'blue',
    borderLeftWidth: 5,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  content: {
    top: 20,
    maxHeight: '80%',
    marginHorizontal: '10%',
  },
  horizontalBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    top: 25,
    marginBottom: 25,
  },
  title: {
    top: 15,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  img: {
    top: 5,
    height: 300,
    resizeMode: 'stretch',
    borderRadius: 5,
    marginBottom: '10%',
  },
  names: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
