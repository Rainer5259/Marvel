import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    top: '40%',
    flex: 0.5,
    backgroundColor: '#ED1D24',
    padding: 20,
    justifyContent: 'space-evenly',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.8,
    shadowOpacity: 1,
  },
  descriptionContainer: {
    backgroundColor: '#BD1D24',

    borderWidth: 1,
    borderRadius: 10,
    margin: '4%',
    maxHeight: '30%',
    paddingHorizontal: 10,
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
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Noteworthy-Bold',
  },
  primaryText: {
    fontFamily: 'Optima-Bold',
    color: 'black',
    fontSize: 14,
    padding: 2,
  },
  header: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: '2%',
  },
  closeModal: {
    fontSize: 26,
    right: '10%',
  },

  thereAreNoStory: {
    fontFamily: 'Noteworthy-Bold',
    fontSize: 22,
    alignSelf: 'center',
  },
});
export default styles;
