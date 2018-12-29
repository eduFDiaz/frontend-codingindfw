import React from "react";
import Wrapper from "../../components/hoc/Wrapper/Wrapper";
import CategoryBuilder from "../../components/Categories/CategoryBuilder/CategoryBuilder";
import PostsBuilder from "../../components/Posts/PostsBuilder/PostsBuilder";
import classes from "./SiteLayout.css";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Footer from "../../containers/Footer/Footer";

const SiteLayout = props => (
  <Wrapper>
    <Toolbar />
    <CategoryBuilder Url="http://localhost:8000/blog/api/categories/" />
    <main className={classes.Content}>
      <PostsBuilder Url="http://localhost:8000/blog/api/posts/" />
    </main>
    <Footer />
  </Wrapper>
);
export default SiteLayout;
