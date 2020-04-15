import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import BookList from '../components/BookList';
import Bottom from '../components/Bottom';
import Drawer from '../components/Drawer';

const DetailScreen = () => {
    return(
        <View style = {{flex: 1}}>
            <Header />
            <BookList />
            <Bottom />
            <View style = {{backgroundColor: "#000", opacity: 0.4, height: 700, position: 'absolute', width: 420}}></View>
            <View style = {{opacity: 1, position: 'absolute'}}>
                <Drawer />
            </View>
        </View>

    );
}

export default DetailScreen;