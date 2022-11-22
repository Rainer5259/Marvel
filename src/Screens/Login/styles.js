import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    color: Colors.colors.red,
    fontFamily: 'Poppins-Bold',
    fontSize: 40,

    left: '5%',
  },
  title: {
    ...Colors.title,
    color: Colors.colors.red,
  },
  comeIn: {
    left: '15%',
    top: '30%',
  },
  and: {left: '42%', top: '12%'},
  beAHero: {left: '26%'},
  signInContainer: {
    marginHorizontal: '15%',
    height: '45%',
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    fontSize: 16,
    paddingLeft: '4%',
  },
  button: {
    left: '40%',
    top: '2%',
    width: '20%',
    height: '5%',
    borderRadius: 20,
    backgroundColor: Colors.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
