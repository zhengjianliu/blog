import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
const ShowScreen = ({navigation}) =>{
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id = navigation.getParam('id'));

    return(
        <Text>{blogPost.id}</Text>
    )
}

const style = StyleSheet.create({

})

export default ShowScreen;