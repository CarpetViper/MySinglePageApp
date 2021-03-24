const POST_ARTICLE = 'POST_ARTICLE';
const UPDATE_NEW_POST_ARTICLE = 'UPDATE_NEW_POST_ARTICLE';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

let initialState = {
  postArticles: [],
  newPostArticle: ''
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ARTICLE: {
      let newPost = {
        id: new Date().getTime(),
        article: state.newPostArticle
      };
      return {
        ...state,
        postArticles: [...state.postArticles, newPost],
        newPostArticle: ''
      };
    }
    case UPDATE_NEW_POST_ARTICLE: {
      return {
        ...state,
        newPostArticle: action.newArticle
      };
    }
    case DELETE_ARTICLE: {
      return {
        ...state,
        postArticles: state.postArticles.filter(
          (el) => el.id !== action.deleteArticle
        )
      };
    }
    default:
      return state;
  }
};

export const postArticleActionCreator = (article) => ({
  type: 'POST_ARTICLE',
  newPostArticle: article
});

export const updateNewPostArticleActionCreator = (updateArticle) => ({
  type: 'UPDATE_NEW_POST_ARTICLE',
  newArticle: updateArticle
});

export const deleteArticleActionCreator = (deleteArticle) => ({
  type: 'DELETE_ARTICLE',
  deleteArticle: deleteArticle
});

export default ArticlesReducer;
