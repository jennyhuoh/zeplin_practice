import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import {navigationRef} from '../../ref';


const Header = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <TouchableOpacity
        onPress = {() => navigationRef.current?.navigate("Detail")}>
        <Image style = {styles.bar} source = {require('../img/btn_navbar_mobile.png')}/>
      </TouchableOpacity> */}
        <View style = {styles.textbox}>
            <Text style = {styles.textStyle}>
                My Book
            </Text>
        </View>
        <Image style = {styles.search} source = {require('../img/btn_search.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#00b49f',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    paddingTop: 30,
    flexDirection: 'row',
  },
  textbox: {
    paddingLeft: 100,
    width: 280,
    height: 25
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  }
});

export default Header;