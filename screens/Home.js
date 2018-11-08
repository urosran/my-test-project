import React from 'react';
import { View, Text, Button } from 'react-native';


export default ({ navigation }) => (
  <View >
    <Text>Home Screen</Text>
    <Button
      title="Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);