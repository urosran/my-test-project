import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';


const Home = ({ navigation }) => (
  <View style={styles.container} >
    <Text style={styles.container}>Home Content</Text>
  </View>
);

Home.navigationOptions = {
  title: 'Za Sasku'
};

export default Home;