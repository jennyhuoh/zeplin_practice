import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import HomeScreen from './src/screens/HomeScreen';
import TabScreen from './src/screens/TabScreen';
//import DetailScreen from './src/screens/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Book ({navigation}) {
  return(
    <Tab.Navigator initialRouteName = 'My Book'
      tabBarOptions = {{
        activeTintColor: '#00b49f',
        inactiveTintColor: '#818181',
        style: {
          height: 90  
        }
      }}>
        <Tab.Screen name = "Home"
        component = {TabScreen}
        options = {{
          title: "Home",
          tabBarIcon: ({focused}) => {
            if(focused ){
              return(
              <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_home_seleced.png')}/>)}
              else{
                return(
             <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_home.png')}/>)}
            }
        }}/>
        <Tab.Screen name = "My Book"
        component = {HomeScreen}
        options = {{
          tabBarLabel: "My Book",
          tabBarIcon: ({focused}) => {
            if(focused){
              return(
                <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_mybook_selected.png')}/>)}
                else{
                  return(
             <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_mybook.png')}/>)}
          }
        }}/>
        <Tab.Screen name = "Favorites"
        component = {TabScreen}
        options = {{
          abBarLabel: "Favorites",
          tabBarIcon: ({focused}) => {
            if(focused){
              return(
              <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_favorites_seleced.png')}/>)}
              else {
                return( <Image style = {styles.tabicon} source = {require('./src/img/icon_bottomnav_favorites.png')}/>)}
          }
        }}/>
      </Tab.Navigator>
  );
}

function StackScreen ({navigation, name}) {
  return(
    <Stack.Navigator initialRouteName = 'My Book'>
      <Stack.Screen 
        name = "Book" 
        component = {Book}
        options = {() => ({
          title: 'My Book',
          headerTintColor: "#fff",
          headerStyle: {backgroundColor: "#00b49f"},
          headerLeft: () => {
            return(
              <TouchableOpacity onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style = {styles.bar} source = {require('./src/img/btn_navbar_mobile.png')}/>          
              </TouchableOpacity>
          )},
          headerRight: () => {
            return(
              <TouchableOpacity onPress = {() =>alert('This is a button!')}> 
              <Image style = {styles.search} source = {require('./src/img/btn_search.png')}/>       
              </TouchableOpacity>  
          )}      
        })} />
    </Stack.Navigator>
    );
}

function CustomDrawerContent(props) {
  return(
    <DrawerContentScrollView {...props}>
      <View>
        <View style = {styles.bg}>
          <Image style = {styles.draweruser} source = {require('./src/img/img_user_photo.png')}/>
          <View style = {styles.drawercontent}>
            <View>
              <Text style = {styles.username}>GAMExHCL</Text>
              <Text style = {styles.useremail}>gdlab2017@gmail.com</Text>
            </View>
            <View>
              <Image style = {styles.drawerdown} source = {require('./src/img/btn_down_arrow.png')}/>
            </View>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />     
    </DrawerContentScrollView>
  );
}

const App = () => {
  const ref = React.useRef(null);
  return ( 
    <NavigationContainer ref = {ref}>
      <Drawer.Navigator initialRouteName = 'My Book'
        drawerContentOptions = {{
          activeTintColor: '#fff',
          activeBackgroundColor: '#00b49f',
          itemStyle: {
            width: 304,
            height: 54,
            marginLeft: 0,
            justifyContent: 'center'
          }
        }}
        drawerContent = {props => <CustomDrawerContent {...props}/>}
        drawerStyle = {{
          backgroundColor: '#ebebeb',
          width: 304,
          shadowOpacity: 0.4,
          shadowColor: "#000",
          shadowOffset: {width: 2, height: 0},
          shadowRadius: 3
        }}>
          <Drawer.Screen 
            name = "Home"
            component = {StackScreen}
            options = {{
              drawerIcon: ({focused}) => (
                focused ?
                  <Image style = {styles.pressedicon} source = {require('./src/img/icon_drawer_home_pressed.png')}/>
                :<Image style = {styles.unpressicon} source = {require('./src/img/icon_drawer_home_un.png')}/>
              )
            }}
          />
          <Drawer.Screen 
            name = "My Book"
            component = {StackScreen}
            options = {{
              drawerIcon: ({focused}) => (
                focused ?
                  <Image style = {styles.pressedicon} source = {require('./src/img/icon_drawer_mybook_pressed.png')}/>
                :<Image style = {styles.unpressicon} source = {require('./src/img/icon_drawer_mybook_un.png')}/>
              )
            }}
          />
          <Drawer.Screen 
            name = "Favorites"
            component = {StackScreen}
            options = {{
              drawerIcon: ({focused}) => (
                focused ?
                  <Image style = {styles.pressedicon} source = {require('./src/img/icon_drawer_favorites_pressed.png')}/>
                :<Image style = {styles.unpressicon} source = {require('./src/img/icon_drawer_favorites_un.png')}/>
              )
            }}
          />
          <Drawer.Screen 
            name = "Settings"
            component = {StackScreen}
            options = {{
              drawerIcon: ({focused}) => (
                focused ?
                  <Image style = {styles.pressedicon} source = {require('./src/img/icon_drawer_setting_pressed.png')}/>
                :<Image style = {styles.unpressicon} source = {require('./src/img/icon_drawer_setting_un.png')}/>
              )
            }}
          />
          <Drawer.Screen 
            name = "About us"
            component = {StackScreen}
            options = {{
              drawerIcon: ({focused}) => (
                focused ?
                  <Image style = {styles.pressedicon} source = {require('./src/img/icon_drawer_aboutus_pressed.png')}/>
                :<Image style = {styles.unpressicon} source = {require('./src/img/icon_drawer_aboutus_un.png')}/>
              )
            }}
          />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabicon: {
    marginBottom: 0
  },
  bar: {
    marginLeft: 7,
  },
  search: {
    marginRight: 7
  },
  bg: {
    backgroundColor: '#00b49f',
    height: 200,
    marginTop: -50,
    paddingLeft: 13
  },
  draweruser: {
    marginTop: 70
  },
  username: {
    paddingTop: 10,
    paddingLeft: 4,
    width: 230,
    fontSize: 14,
    color: "#fff",
    fontWeight: '500'
  },
  useremail: {
    paddingTop: 5,
    paddingLeft: 4,
    width: 230,
    fontSize: 14,
    color: "#fff",
    fontWeight: '500'
  },
  drawerdown: {
    marginTop: 12
  },
  drawercontent: {
    flexDirection: 'row'
  },
  pressedicon: {
    marginLeft: 24
  },
  unpressicon: {
    marginLeft: 24
  }
});

export default App;