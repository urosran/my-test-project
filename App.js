import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home.js';
import Settings from './screens/Settings.js';

export default createStackNavigator(
  {
    Home,
    Settings
  },
  { initialRouteName: 'Home' }
);


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
