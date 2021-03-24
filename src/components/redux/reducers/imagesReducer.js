const POST_IMAGE = 'POST_IMAGE';
const UPDATE_NEW_POST_IMAGE = 'UPDATE_NEW_POST_IMAGE';
const DELETE_IMAGE = 'DELETE_IMAGE';

let initialState = {
  postImages: [],
  newPostImage: ''
};

const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE: {
     let newImg = {
        id: new Date().getTime(),
        img: action.newPostImage
      };
      return {
        ...state,
        postImages: [...state.postImages, newImg]
      };
    }
    case UPDATE_NEW_POST_IMAGE: {
      return {
        ...state,
        newPostImage: action.newImage
      };
    }
    case DELETE_IMAGE: {
      return {
        ...state,
        postImages: state.postImages.filter((el) => el.id !== action.deleteImage)
      };
    }
    default:
      return state;
  }
};

export const postImageActionCreator = (image) => ({
  type: 'POST_IMAGE',
  newPostImage: image
});

export const updateNewPostImageActionCreator = (updatedImage) => ({
  type: 'UPDATE_NEW_POST_IMAGE',
  newImage: updatedImage
});

export const deleteImageActionCreator = (deleteImage) => ({
  type: 'DELETE_IMAGE',
  deleteImage: deleteImage
});


export default ImagesReducer;

