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
    paddingHorizontal: '4%',
    marginRight: '4%',
    justifyContent: 'space-evenly',
  },
  buttonArrow: {
    width: 50,
    height: 50,
    iconName: 'arrow-left',
    iconSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backScreen: {
    width: 24,
    height: 24,
    backgroundColor: Colors.colors.default,
  },
  content: {
    top: '5%',
    maxHeight: '80%',
    marginHorizontal: '10%',
  },
  horizontalBar: {
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    top: '1%',
    marginBottom: '2%',
  },
  title: {
    textAlign: 'center',
    //borderRadius estilizar
  },
  img: {
    top: '2%',
    height: 350,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginBottom: '10%',
    shadowOpacity: 10,
  },
  description: {
    bottom: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E9E9E7',
    flexDirection: 'row',
    borderRadius: 15,
    padding: '2%',
    margin: '2%',
  },
  showMore: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '1%',
    borderRadius: 12,
    bottom: '-10%',
    marginRight: '1%',
    fontSize: 18,
  },
  searchBar: {
    width: '80%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
  },
});
export default styles;
