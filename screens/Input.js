// import React from 'react';
import {Component} from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Appbar } from 'react-native-paper';

import styles from '../styles';

// export default class StoringData extends Component {
//     // The initial state of this component
//     // consists of the current "key" and "value"
//     // that the user is entering. It also has
//     // a "source" for the list view to display
//     // everything that's been stored.
//     state = {
//       data: fromJS({
//         key: null,
//         value: null,
//         source: []
//       })
//     };
  
//     // Getter for "Immutable.js" state data...
//     get data() {
//       return this.state.data;
//     }  
    
    
//     render(){
//         <Card>
//             <Card.Content>
//                 <Title>Add a friend</Title>
//                 <TextInput
//                     label='Name'
//                     value={this.state.text}
//                     onChangeText={text => person.name=text}
//                 />
//                 <TextInput
//                     label='Surname'
//                     value={this.state.text}
//                     onChangeText={text => person.surname=text}
//                 />
//                 <Paragraph>Current location: beograd</Paragraph>

//             </Card.Content>
            
//             {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
//             <Card.Actions>
//                 <Button onPress={people[people.length+1]=person}>Ok</Button>
//                 <Button onPress={console.log("FUCK OFF")}>Cancel</Button>
//             </Card.Actions>
//         </Card>
//     };
// };


import React from 'react';
import { View, Text } from 'react-native';

// import styles from './styles';
var people = []            
var person = {name:"",
                surname:""} 

const Input = ({ navigation }) => (
  <View>  
    <Card>
            <Card.Content>
                <Title>Add a friend</Title>
               <TextInput
                    label='Name'
                    value={this.state.text}
                    onChangeText={text => person.name=text}
                />
                <TextInput
                    label='Surname'
                    value={this.state.text}
                    onChangeText={text => person.surname=text}
                />
                <Paragraph>Current location: beograd</Paragraph>

            </Card.Content>
            
            
            <Card.Actions>
                <Button onPress={()=>people[people.length+1]=person}>Ok</Button>
                <Button onPress={console.log("FUCK OFF")}>Cancel</Button>
            </Card.Actions>
        </Card>
        </View>
    );


Input.navigationOptions = {
  title: 'Home'
};

export default Input;


            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
