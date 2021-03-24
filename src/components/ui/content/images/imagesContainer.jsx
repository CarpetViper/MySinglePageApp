import { connect } from 'react-redux';
import {
  deleteImageActionCreator,
  postImageActionCreator,
  updateNewPostImageActionCreator
} from '../../../redux/reducers/imagesReducer';
import Images from './images';

let mapStateToPorps = (state) => {
  return {
    postImages: state.Images.postImages,
    newPostImage: state.Images.newPostImage
  };
};

let mapDispatchToPorps = (dispatch) => {
  return {
    postImage: (newPostImage) => {
      dispatch(postImageActionCreator(newPostImage));
    },
    updateNewPostImage: (updateImage) => {
      dispatch(updateNewPostImageActionCreator(updateImage));
    },
    deleteImage: (deleteImage) => {
      dispatch(deleteImageActionCreator(deleteImage));
    }
  };
};

const ImagesContainer = connect(mapStateToPorps, mapDispatchToPorps)(Images);

export default ImagesContainer;

