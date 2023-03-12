import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    top: '40%',
    flex: 0.5,
    backgroundColor: '#ED1D24',
    padding: 20,
    justifyContent: 'space-evenly',
    borderRadius: 15,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    width: '90%',
    alignSelf: 'center',
    shadowOpacity: 1,
    shadowRadius: 50,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;
