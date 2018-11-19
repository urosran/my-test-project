import * as React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Appbar } from 'react-native-paper';
import styles from '../styles';

// export default ({ navigation }) => (
//   <View style={styles.container}>
//     <Text>Home Screen</Text>
//     <Button
//       title="Map"
//       onPress={() => navigation.navigate('Map')}
//     />
//   </View>
// );
state = {
    text: []
  };

const Home = ({ navigation }) => (
    <View> 
        <Appbar style={styles1.bottom}>
        
            <Appbar.Action icon="map" onPress={()=>{ navigation.navigate('Map')}} />
            <Appbar.Action icon={`favorite`} onPress={() => console.log('Pressed mail')} />
            {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
            <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}
         </Appbar>
        <Card>
            <Card.Content>
                <Title>Add a friend</Title>
                <TextInput
                    label='Name'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <TextInput
                    label='Surname'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <Paragraph>Current location: beograd</Paragraph>


                {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
            
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
            <Card.Actions>
                <Button>Ok</Button>
                <Button>Cancel</Button>
            </Card.Actions>
        </Card>
       

     </View>
  );
  

Home.navigationOptions = ({ navigation }) => ({
    title: "NameGuru",
    headerRight: (
      <Button
        icon="language"
        mode="contained"
        title="Map"
        onPress={()=>{ navigation.navigate('Map')}}
        // disabled={navigation.getParam('stock') === 0}
      />
    )
  });
  
  const styles1 = StyleSheet.create({
    bottom: {
        display:"flex",
        justifyContent: "space-around"

    },
  });

  export default Home;
