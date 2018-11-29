import * as React from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity  } from 'react-native';
import { Button,
         Appbar } from 'react-native-paper';

import styles from '../styles';
import Input from "./Input"
import { fromJS } from 'immutable';

class Home extends React.Component {
    // static navigationOptions = {
    //   title: 'Welcome',
    // };
    render() {
    //   const {navigate} = this.props.navigation;
      return (
        <View> 
         <Appbar style={styles1.bottom}>
        
            <Appbar.Action icon="map" onPress={()=>{ navigation.navigate('Map')}} />
             <Appbar.Action icon={`favorite`} onPress={() => console.log('Pressed mail')} />
             {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
             <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}
        </Appbar>
             <Input/>
         <ScrollView>

         </ScrollView>
     </View>    
      );
    }
  }

  export default Home
// state = {
//     data: fromJS({
//         person:{
//             name: "",
//             surname: ""
//         }    
//     })
//   };


// const Home = ({ navigation }) => (
    
//     <View> 
//         <Appbar style={styles1.bottom}>
        
//             <Appbar.Action icon="map" onPress={()=>{ navigation.navigate('Map')}} />
//             <Appbar.Action icon={`favorite`} onPress={() => console.log('Pressed mail')} />
//             {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
//             <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}
//          </Appbar>
//             <Input/>

//         <ScrollView>

//         </ScrollView>
     
//      </View>    
//     )


//    Home.navigationOptions = ({ navigation }) => ({
//     title: "NameGuru",
//     headerRight: (
//       <Button
//         icon="language"
//         mode="contained"
//         title="Map"
//         onPress={()=>{ navigation.navigate('Map')}}
//         // disabled={navigation.getParam('stock') === 0}
//       />
//     )
//   });
  
  const styles1 = StyleSheet.create({
    bottom: {
        display:"flex",
        justifyContent: "space-around"

    },
    scroll: {
        marginTop:0,
        display:"flex",
        
    }
  });

//   export default Home;

