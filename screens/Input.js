import {Component} from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Appbar } from 'react-native-paper';
import styles from '../styles';
import React from 'react';
import { View, Text } from 'react-native';

// import styles from './styles';
var people = []            
var person = {name:"",
                surname:""} 
class Input extends React.Component{
    render(){
        return(
        <View>  
            <Card>
                <Card.Content>
                    <Title>Add a friend</Title>
                <TextInput
                        label='Name'
                        
                        onChangeText={text => person.name=text}
                    />
                    <TextInput
                        label='Surname'
                        
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
        )
    };
}





export default Input;


            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
