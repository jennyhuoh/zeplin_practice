import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Drawer = () =>{
    return(
      <View style = {styles.left}>
        <View style = {styles.header}>
          <Image style = {styles.headimg} source = {require('../img/img_user_photo.png')} />
          <View style = {styles.wordsec}>
            <Text style = {styles.name}>GamexHCI gdlab2017@gmail.com</Text>
            <Image style = {styles.arrow} source = {require('../img/btn_down_arrow.png')}/>
          </View>
        </View>
        <View style = {styles.content}>
          <View style = {styles.sec1}>
            <Image style = {styles.icon} source = {require('../img/icon_drawer_home.png')}/>
            <Text style = {styles.selec}>Home</Text>
          </View>
          <View style = {styles.sec2}>
            <Image style = {styles.icon} source = {require('../img/icon_drawer_mybook_pressed.png')}/>
            <Text style = {styles.selec2}>My Book</Text>
          </View>
          <View style = {styles.sec1}>
            <Image style = {styles.icon} source = {require('../img/icon_drawer_favorites.png')}/>
            <Text style = {styles.selec}>Favorites</Text>
          </View>
          <View style = {styles.sec1}>
            <Image style = {styles.icon} source = {require('../img/icon_drawer_setting.png')}/>
            <Text style = {styles.selec}>Setting</Text>
          </View>
          <View style = {styles.sec1}>
            <Image style = {styles.icon} source = {require('../img/icon_drawer_aboutus.png')}/>
            <Text style = {styles.selec}>About us</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      shadowOpacity: 0.4,
      shadowColor: "#000",
      shadowOffset: {width: 2, height: 0},
      shadowRadius: 3
    },
    left: {
      width: 300,
    },
    header: {
      height: 168,
      backgroundColor: "#00b49f",
    },
    headimg: {
      marginTop: 37,
      marginLeft: 13
    },
    wordsec: {
      flexDirection: 'row'
    },
    name: {
      paddingTop: 10,
      paddingLeft: 16,
      width: 230,
      fontSize: 14,
      color: "#fff",
      fontWeight: '500'
    },
    arrow: {
      marginTop: 6.3,
      marginLeft: 25
    },
    content: {
      backgroundColor: "#ebebeb",
      height: 500
    },
    sec1: {
      flexDirection: 'row',
      marginTop: 8,
      height: 54
    },
    sec2: {
      flexDirection: 'row',
      marginTop: 8,
      height: 54,
      backgroundColor: "#00b49f"
    },
    icon: {
      marginLeft: 24,
      marginTop: 15
    },
    selec: {
      marginLeft: 32,
      marginTop: 18,
      fontSize: 14,
      fontWeight: '700',
      color: "#5c5c5c"
    },
    selec2: {
      marginLeft: 32,
      marginTop: 18,
      fontSize: 14,
      fontWeight: '700',
      color: "#fff"
    },
  });

export default Drawer;