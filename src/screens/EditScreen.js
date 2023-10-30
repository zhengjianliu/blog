import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
const EditScreen = ({navigation}) =>{
    const { state, editBlogPost } = useContext(Context);
    let postId = navigation.getParam('id')
    let blogPost = state.find(blog=>{
        return blog.id == postId;
    })
    return <BlogPostForm 
    initialValues={{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title,content)=>{
        editBlogPost(postId,title,content,()=>{
            navigation.pop()
        })
    }}/>
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

export default EditScreen;