import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigationRef } from './ref';


const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer ref = {navigationRef}>
      <Stack.Navigator>
      <Stack.Screen 
        name = "My Book" 
        component = {HomeScreen} 
        options = {{
          headerLeft: () => 
          <TouchableOpacity onPress = {() => navigationRef.current?.navigate("Detail")}>
            <Image style = {styles.bar} source = {require('./src/img/btn_navbar_mobile.png')}/>          
          </TouchableOpacity>,
          headerRight: () => <TouchableOpacity onPress = {() =>alert('This is a button!')}> 
            <Image style = {styles.search} source = {require('./src/img/btn_search.png')}/>       
          </TouchableOpacity>,
          headerTintColor: "#fff",
          headerStyle: {backgroundColor: "#00b49f"}
          }}
          
        />
      <Stack.Screen 
        name = "Detail" 
        component = {DetailScreen}
        options = {{header: ()=>null}}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bar: {
    marginLeft: 7
  },
  search: {
    marginRight: 7
  }
});

export default App;