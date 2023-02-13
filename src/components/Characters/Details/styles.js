import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    top: '50%',
    flex: 0.5,
    backgroundColor: '#b2E2E2',
    padding: 20,
    justifyContent: 'space-evenly',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
  },
  primaryText: {
    color: 'black',
    fontSize: 16,
    padding: 2,
  },
  descriptionContainer: {
    backgroundColor: '#B2A3E2',
    borderWidth: 1,
    borderRadius: 10,
    margin: '2%',
    maxHeight: '30%',
    paddingHorizontal: 10,
  },
  closeModal: {
    fontSize: 26,
    right: '10%',
    // backgroundColor: 'red',
  },
});
export default styles;
