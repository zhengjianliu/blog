import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';
const BlogPostForm = ({onSubmit, initialValues}) =>{
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return(
        <View>
            <Text style={style.label}>Enter Title:</Text>
            <TextInput value={title} onChangeText={setTitle} style={style.input}/>
            <Text style={style.label}>Enter Content:</Text>
            <TextInput value={content} onChangeText={setContent} style={style.input}/>
            <Button title="Save Blog Post"
            onPress={()=>onSubmit(title,content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }
}

const style = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
})

export default BlogPostForm;