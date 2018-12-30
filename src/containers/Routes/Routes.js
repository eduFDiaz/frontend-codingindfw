import React from 'react';
import { Route } from 'react-router-dom';
import PostList from '../../components/Posts/PostList/PostList';
import CategoryList from '../../components/Categories/CategoryList/CategoryList';
import Post from '../../components/Posts/Post/Post';
import Category from '../../components/Categories/Category/Category';


const BaseRouter = (properties) =>{
    return  <div>
                <Route exact path='/' render={(props) => <PostList {...props} Url="http://localhost:8000/api/posts/" />} />
                <Route exact path='/categories/' render={(props) => <CategoryList {...properties} Url="http://localhost:8000/api/categories/" />}/>
                <Route exact path='/categories/:catID' render={(props) => <Category  {...props} Url="http://localhost:8000/api/categories/" />} />
                <Route exact path='/posts/' render={(props) => <PostList {...props} Url="http://localhost:8000/api/posts/" />} />
                <Route exact path='/posts/:postID' render={(props) => <Post {...props} Url="http://localhost:8000/api/posts/" />} />
            </div>;
};
export default BaseRouter;