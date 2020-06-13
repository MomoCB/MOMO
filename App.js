import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image,TouchableWithoutFeedback, useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GameScreen from './pantallas/GameScreen';



const image = { uri: "./sources/fonfo.jpg" };




function LoadScreen({ navigation }) {
  return (
  
 
      <ImageBackground source={require('./sources/fonfo.jpg')}  style={styles.fonfo}>
      
      <View style={styles.container}>
      
     <Image
     style= {styles.image}
     source={require('./sources/momovec.png')}
        />
        </View>
      <View style={styles.TouchableButton2}>
      <TouchableWithoutFeedback
     
     onPress={() => navigation.navigate('Home')}
      >
        <Image
        style= {styles.Loadbar}
        source={require('./sources/Load.gif')}
     
      />
      </TouchableWithoutFeedback>
    
      </View>
      
      </ImageBackground>
      
  );
}
function HomeScreen({ navigation }) {
  return (
  
 
      <ImageBackground source={require('./sources/fonfo.jpg')}  style={styles.fonfo}>
      
      <View style={styles.container}>
      
     <Image
     style= {styles.image}
     source={require('./sources/momovec.png')}
        />
        </View>

      <View style={styles.TouchableButton2}>
      <TouchableOpacity
     
     onPress={() => navigation.navigate('Game')}
      >
        <Image
        style= {styles.Button}
        source={require('./sources/boton.png')}
     
      />
      </TouchableOpacity>  
      </View>
      <View style={styles.TouchableButton} >
      <TouchableOpacity
     
     onPress={() => navigation.navigate('Records')}
      >
        <Image
        style= {styles.Buttonlogros}
        source={require('./sources/logros.png')}
     
      />
      </TouchableOpacity>
      
    
    
      </View>
      </ImageBackground>
      
  );
}

function RecordScreen({ navigation }) {
  return (
  
 
      <ImageBackground source={require('./sources/fonfo.jpg')}  style={styles.fonfo}>
      
      <View style={styles.container}>
      
     <Image
     style= {styles.imageRecord}
     source={require('./sources/Record.png')}
        />
        </View>
<View style={styles.Score}>
  <Text style={styles.textRecord}>
Tu Mejor SCORE:

  </Text>
</View>

      
      <View style={styles.TouchableButton} >
      <TouchableOpacity
     
     onPress={() => navigation.navigate('Home')}
      >
        <Image
        style= {styles.Buttonlogros}
        source={require('./sources/home.png')}
     
      />
      </TouchableOpacity>
      
    
    
      </View>
      </ImageBackground>
      
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
      <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name="Records" component={RecordScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name="Load" component={LoadScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  
  container: {

    flex: 1,
    flexDirection: "column", 
    alignItems: 'center',
   marginVertical: 30
    
  },
  BarraUp: {
    flex:1,
    flexDirection: 'row',
backgroundColor:'pink',
    
  },
  containerSTM:{

      backgroundColor: 'pink',  
       
      height:80,
    width:500,    
       
      },
  containerS: {
marginVertical: 5,
    alignItems: 'center',
    
   
    
  },
  containerM: {

    alignItems: 'center',
  
    
  },
  containerT: {

    alignItems: 'center',
   
    
  },
   TouchableButton: {
   
    flex: 1,
     alignItems: 'flex-start',
   
    
  },
  TextUp:{
 color:'white',
 fontSize: 14,

  },
  Barradown: {
    backgroundColor: 'pink',  
    
   height:80,
   marginVertical:100,
   width: 500,
     
    
     
   },
  
   TouchableButton: {
   
    flex: 1,
     alignItems: 'flex-start',
width:50,
height:50,   
    
  },
  TouchableButtonRight: {

    flex:115,
     marginHorizontal: 250,
     marginVertical:5,
   
    
  },
  
  TouchableButton2: {
   
    flex: 1,
    flexDirection: 'column',
    marginVertical: 120,
     alignItems: 'center',

   
    
  },
  TouchableCard: {
   
    width:100,
    height:150,
    backgroundColor: 'pink',
    flexDirection: 'column',
    marginVertical:65,
    marginHorizontal:30,
    alignItems: 'center',

   
    
  },
  Score: {
  backgroundColor: 'white',  
    flex: 1,
    marginVertical:120,
    marginHorizontal: 20,
    borderColor:'#FBABF7',
    borderRadius: 10,
    borderWidth: 2,
    
  },
  fonfo: {
  flex: 1,
    resizeMode: "cover",
    
  },
  image: {
    
    
    width:340,
    height:340,
   
    
  },
  imageRecord: {
    
    
    width:300,
    height:300,
   
    
  },
  Button: {
    
    width:110,
    height:110,
  },
  Buttonlogros: {
    
    width:100,
    height:100,
  },
  ButtonPause: {
    
    marginVertical:10,
 marginHorizontal:30,
    width:66,
    height:66,
  },
  ButtonLogo: {
    
    marginVertical:40,
 marginHorizontal:30,
    width:66,
    height:66,
  },


 
  ButtonReiniciar: {
    marginHorizontal:30,
  marginVertical:5,
    width:70,
    height:70,
  },

  
  Buttonhome: {

    marginHorizontal:100,
  
    width:70,
    height:70,
  },
  
 
 
  Loadbar: {
    
    width:200,
    height:200,
   
    
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  textRecord: {
    marginHorizontal: 10,
    color: "pink",
    fontSize: 18,
    fontWeight: "bold"
  }
});