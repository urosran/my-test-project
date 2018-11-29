import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Map from './screens/Map';



// export default createStackNavigator(
//   {
//     Home,
//     Map,
//   },
//   { initialRouteName: 'Home' }
// );

export default class App extends React.Component{
  render(){
    return(<AppStackNavigator />)
  }
}



const AppStackNavigator = createStackNavigator({
  Home: {screen: Home},
  Map: {screen:Map}
  // Profile: {screen: Map},
});

// export default App;
