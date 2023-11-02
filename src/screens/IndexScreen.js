import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
const IndexScreen = ({navigation}) =>{
    const {state, addBlogPost,deleteBlogPost, getBlogPosts} = useContext(Context)

    useEffect(()=>{
        getBlogPosts();
        const listener = navigation.addListener('didFocus',()=>{
            getBlogPosts();
        })

        return () =>{
            listener.remove();
        }
    },[])

    return (
        <View>
            <FlatList
            data={state}
            keyextractor={(blogPost) =>blogPost.title}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <View style={style.row}>
                            <Text style={style.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather name="trash" style={style.icon}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    };
  };

const style = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'grey'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;