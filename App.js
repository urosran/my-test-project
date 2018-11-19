import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Map from './screens/Map';

export default createStackNavigator(
  {
    Home,
    Map
  },
  { initialRouteName: 'Home' }
);
