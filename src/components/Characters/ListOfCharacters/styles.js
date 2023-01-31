import {StyleSheet} from 'react-native';
import Themes from '../../../assets/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.default,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderColor: 'skyblue',
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
    backgroundColor: Themes.colors.default,
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
