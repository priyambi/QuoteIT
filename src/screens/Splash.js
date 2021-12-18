import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const Splash = () => (
  <LinearGradient
    colors={['#1A1B2F', '#162447', '#1F4068']}
    style={styles.linearGradient}>
    <LottieView
      source={require('../assets/quote.json')}
      autoPlay={true}
      loop
      style={styles.lottieview}
    />

    <Text style={styles.header}>QuoteIT</Text>
  </LinearGradient>
);
export default Splash;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    height: 500,
    width: 350,
    backgroundColor: '#e33e5a',
    marginTop: 200,
    alignSelf: 'center',
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  lottieview: {
    height: 250,
    width: 250,
    marginTop: 40,
    alignSelf: 'center',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 40,
  },
});
