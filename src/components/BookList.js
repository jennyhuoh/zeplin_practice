import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import Books from "../Books.json"

const BookList = () => {
  return(
      <View>
      <View style = {styles.bgstyle}>
          <View style = {styles.bookbg}>
            <Image source = {require('../img/img_the_immortalists.png')}/>
          </View>
          <View style = {styles.textcontent}>
            <Text style = {styles.head}>
                {Books[0].one}
            </Text>
            <Text style = {styles.headtwo}>
                {Books[0].two}
            </Text>
            <Text style = {styles.words}>
                {Books[0].words}
            </Text>
            <View style = {styles.linebg}><View style = {styles.lineup}></View></View>
            <Text style = {styles.lastword}>
                {Books[0].last}
            </Text>
          </View>
      </View>
      <View style = {styles.bgstyle}>
      <View style = {styles.bookbg}>
        <Image source = {require('../img/img_gristmillroad.png')}/>
      </View>
      <View style = {styles.textcontent}>
        <Text style = {styles.head}>
            {Books[1].one}
        </Text>
        <Text style = {styles.headtwo}>
            {Books[1].two}
        </Text>
        <Text style = {styles.words}>
            {Books[1].words}
        </Text>
        <View style = {styles.linebg}></View>
        <Image style = {styles.startread} source = {require('../img/btn_start_read.png')}/>
      </View>
  </View>
  <View style = {styles.bgstyle}>
          <View style = {styles.bookbg}>
            <Image source = {require('../img/img_streetartactivitybook.png')}/>
          </View>
          <View style = {styles.textcontent}>
            <Text style = {styles.head}>
                {Books[2].one}
            </Text>
            <Text style = {styles.headtwo}>
                {Books[2].two}
            </Text>
            <Text style = {styles.words}>
                {Books[2].words}
            </Text>
            <View style = {styles.linebg}><View style = {styles.lineup}></View></View>
            <Text style = {styles.lastword}>
                {Books[2].last}
            </Text>
          </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  bgstyle: {
      backgroundColor: "#f8f8f8",
      height: 170,
      borderBottomWidth: 1,
      borderBottomColor: "#d1d1d1",
      flexDirection: 'row',
  },
  bookbg: {
    width: 99,
    height: 146,
    backgroundColor: "#f8f8f8",
    borderColor: "#d1d1d1",
    borderWidth: 0.5,
    marginLeft: 15,
    marginTop: 12,
    padding: 2.5,
  },
  textcontent: {
      width: 222,
      marginLeft: 24,
      marginTop: 28,
  },
  head: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#212121",
  },
  headtwo: {
    marginTop: 11,
    color: "#717171",
    fontSize: 14,
  },
  words: {
      color: "#b1b1b1",
      marginTop: 11,
  },
  linebg: {
      backgroundColor: "#c3c3c3",
      height: 3,
      marginTop: 10,
      borderRadius: 3,
  },
  lineup: {
    backgroundColor: "#70b4a1",
    borderRadius: 3,
    width: 106,
    height: 3,
  },
  lastword: {
      color: "#b1b1b1",
      marginTop: 9,
  },
  startread: {
      marginTop: 6,
      marginLeft: -6
  }
});

export default BookList;