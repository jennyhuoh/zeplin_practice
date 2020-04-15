import React from "react";
import {View, Flatlist, ScrollView} from "react-native";
import Header from '../components/Header';
import BookList from '../components/BookList';
import Bottom from '../components/Bottom';


const HomeScreen = ({navigation}) =>{
    return(
        <View style = {{flex: 1}}> 
            {/* <Header navigation = {navigation}/> */}
            <ScrollView>
                <BookList />
            </ScrollView>
            <Bottom />
        </View>
    );
}

export default HomeScreen;