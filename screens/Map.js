import React from 'react';
import { View, Text, Button } from 'react-native';
import WhereAmI from './whereAmI'
import styles from '../styles';
import MapView from 'react-native-maps';
import Marker from './Marker'

export default ({ navigation }) => (
    <View style={styles.container}>
        <MapView
        style={styles.mapView}
        showsPointsOfInterest={true}
        showsUserLocation
        followUserLocation={true}
        showsMyLocationButton={true}
        />
    
    {/* <WhereAmI/>
    <Marker/> */}
   
  </View>
);

Map.navigationOptions = ({ navigation }) => ({
    title: "Map",
  });