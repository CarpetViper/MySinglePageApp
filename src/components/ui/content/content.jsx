import React from "react";
import { Route, Switch } from "react-router-dom";
import Description from "../../description/description";
import ArticlesContainer from "./articles/articlesContainer";
import ImagesContainer from "./images/imagesContainer";

const Content = (props) => {
  return (
    <div>
      <Switch>
      <Route
        path="/articles" 
        render={() => ( 
        <ArticlesContainer />
        )} 
      />
      <Route
        path="/images"
        render={() => (
          <ImagesContainer />
        )}
      /> 
      <Route 
        path='*' 
        render={ () => (
          <Description />
          )} 
      /> 
      </Switch>
    </div>   
  );
};

export default Content;

/*
import React from "react";
import { Route } from "react-router-dom";
import Articles from "./articles/articles";
import Images from "./images/images";
import Videos from "./videos/videos";

const Content = (props) => {
  return (
    <div>
      <Route
        path="/articles"
        render={() => (
          <Articles
            state={props.state}
            Articles={props.state.Articles}
            postArticle={props.postArticle}
            updateNewPostArticle={props.updateNewPostArticle}
          />
        )}
      />
      <Route
        path="/images"
        render={() => (
          <Images
            state={props.state}
            Images={props.state.Images}
            postImage={props.postImage}
            updateNewPostImage={props.updateNewPostImage}
          />
        )}
      />
      <Route
        path="/videos"
        render={() => (
          <Videos
            state={props.state}
            Videos={props.state.Videos}
            postVideo={props.postVideo}
            updateNewPostVideo={props.updateNewPostVideo}
          />
        )}
      />
    </div>
  );
};

export default Content;
*/
