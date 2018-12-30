import React from 'react';
import { Route } from 'react-router-dom';
import PostList from '../../components/Posts/PostList/PostList';
import CategoryList from '../../components/Categories/CategoryList/CategoryList';
{/* <CategoryList Url="http://localhost:8000/api/categories/" />
<PostsList Url="http://localhost:8000/api/posts/" />
 */}
const BaseRouter = () =>{
    return  <div>
                <Route exact path='/categories/' component={() => <CategoryList Url="http://localhost:8000/api/categories/" />} />
                <Route exact path="/categories/:catID" component={() => <CategoryList Url="http://localhost:8000/api/categories/" />} />
                <Route exact path='/posts/' component={() => <PostList Url="http://localhost:8000/api/posts/" />} />
                <Route exact path="/posts/:postID" component={() => <PostList Url="http://localhost:8000/api/posts/" />} />
            </div>;
}
export default BaseRouter;