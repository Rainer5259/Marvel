import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.default,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderColor: 'skyblue',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    left: '1%',
  },
  content: {
    top: 20,
    maxHeight: '80%',
    marginHorizontal: '10%',
  },
  horizontalBar: {
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    top: 25,
    marginBottom: 25,
  },
  title: {
    textAlign: 'center',
  },
  img: {
    top: 5,
    height: 300,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginBottom: '10%',
    shadowOpacity: 10,
  },
  description: {
    bottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '0%',
    backgroundColor: 'yellow',
    borderRadius: 15,
    paddingHorizontal: '5%',
  },
  showMore: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
