import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWIDTH = Dimensions.get('window').width / 2;
export default EStyleSheet.create({
  container: {
    alignItems: 'center', // X axis
  },
  containerImage: {
    width: imageWIDTH,
    height: imageWIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: imageWIDTH / 2,
    height: imageWIDTH / 2,
  },
  txt: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.05,
    marginTop: 15,
    fontWeight: '600',
  },
});
