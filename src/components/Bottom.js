import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';


const Bottom = ({navigation}) => {
    return (
      <View style = {styles.bar}>
          <View style = {styles.left}>
            <Image source = {require('../img/icon_bottomnav_home.png')}/>
            <Text style = {styles.name}>Home</Text>
          </View>
          <View style = {styles.middle}>
            <Image source = {require('../img/icon_bottomnav_mybook_selected.png')}/>
            <Text style = {styles.nameselected}>My Book</Text>
          </View>
          <View style = {styles.right}>
            <Image source = {require('../img/icon_bottomnav_favorites.png')}/>
            <Text style = {styles.name}>Favorites</Text>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 56,
    },
    left: {
        width: 120,
        alignItems: 'center',
        marginTop: 6
    },
    middle: {
        width: 120,
        alignItems: 'center',
        marginTop: 6
    },
    right: {
        width: 120,
        alignItems: 'center',
        marginTop: 6
    },
    name: {
        color: "#818181",
    },
    nameselected: {
        color: "#00b49f",
        fontWeight: '700',
    }
  });
  
  export default Bottom;