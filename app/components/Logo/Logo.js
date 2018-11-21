import React from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';
import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require('./images/background.png')}
        style={styles.containerImage}
      >
        <Image
          resizeMode="contain"
          source={require('./images/logo.png')}
          style={styles.logo}
        />
      </ImageBackground>
      <Text style={styles.txt}>Currency Converter</Text>
    </View>
  );
};

export default Logo;
