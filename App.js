import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';
import Bottom from './src/components/Bottom';



const App = () => {
  return ( 
    <View>
      <Header />
      <ScrollView>

      <BookList />
      </ScrollView>
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;