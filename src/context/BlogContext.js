import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                },
            ];
        case "delete_blogpost":
            return state.filter(post=> post.id !== action.payload)
        case "edit_blogpost":
            return state.map(blogPost=>{
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }
};
const addBlogPost = (dispatch) => {
    return async (title,content, callback) => {
        try{
            dispatch({ type: "add_blogpost",payload:{title,content}});
            if(callback){
                callback();
            }
        } catch(err){
            console.log(err)
        }
    };
};

const editBlogPost = (dispatch) =>{
    return (id,title,content,callback)=>{
        dispatch({ type: "edit_blogpost",payload:{id,title,content}});
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) =>{
    return (id)=>{
        dispatch({type:'delete_blogpost', payload:id})
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
);
