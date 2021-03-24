import { connect } from 'react-redux';
import {
  postArticleActionCreator,
  updateNewPostArticleActionCreator,
  deleteArticleActionCreator
} from '../../../redux/reducers/articlesReducer';
import Articles from './articles';

let mapStateToPorps = (state) => {
  return {
    postArticles: state.Articles.postArticles,
    newPostArticle: state.Articles.newPostArticle
  };
};

let mapDispatchToPorps = (dispatch) => {
  return {
    postArticle: (newPostArticle) => {
      dispatch(postArticleActionCreator(newPostArticle));
    },

    updateNewPostArticle: (action) => {
      dispatch(updateNewPostArticleActionCreator(action));
    },

    deleteArticle: (action) => {
      dispatch(deleteArticleActionCreator(action));
    }
  };
};

const ArticlesContainer = connect(
  mapStateToPorps,
  mapDispatchToPorps
)(Articles);

export default ArticlesContainer;
