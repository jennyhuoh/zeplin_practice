import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import HomeScreen from './src/screens/HomeScreen';
//import DetailScreen from './src/screens/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackScreen ({navigation, name}) {
  return(
    <Stack.Navigator initialRouteName = 'My Book'>
      <Stack.Screen 
        name = "HomeScreen" 
        component = {HomeScreen}
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
      <Drawer.Navigator
        drawerContentOptions = {{
          activeTintColor: '#fff',
          activeBackgroundColor: '#00b49f'
        }}
        drawerContent = {props => <CustomDrawerContent {...props}/>}
        drawerStyle = {{
          backgroundColor: '#ebebeb',
          width: 300
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
  bar: {
    marginLeft: 7
  },
  search: {
    marginRight: 7
  },
  bg: {
    backgroundColor: '#00b49f'
  },
  drawercontent: {
    flexDirection: 'row'
  }
});

export default App;