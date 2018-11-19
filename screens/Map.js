import React from 'react';
import { View, Text, Button } from 'react-native';
import WhereAmI from './whereAmI'
import styles from '../styles';
import MapView from 'react-native-maps';

export default ({ navigation }) => (
    <View style={styles.container}>
        <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        />
    <Text>Render A map here</Text>
    <WhereAmI/>
   
  </View>
);

Map.navigationOptions = ({ navigation }) => ({
    title: "Map",
  });