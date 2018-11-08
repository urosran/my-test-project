import React from 'react';
import { View, Text, Button } from 'react-native';


export default ({ navigation }) => (
  <View >
    <Text>Settings Screen</Text>
    <Button      title="Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);