import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  dropDownStyle: {
    width: '65%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropDownView: {
    margin: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageView: {
    width: '92%',
    height: '60%',
    borderRadius: 25,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '126%',
  },
  imageStyle: {
    width: '94%',
    height: '94%',
    borderRadius: 10,
  },
});

export default HomeStyle;
