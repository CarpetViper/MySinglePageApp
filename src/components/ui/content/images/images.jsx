import React from "react";
import s from "./images.module.css";

const Images = (props) => {
  const fileSelectedHandler = (e) => {
    let reader = new FileReader();
      reader.readAsDataURL(e[0]);
      reader.onload= (e) => {
      props.postImage(reader.result);
    }
  }

  return (
    <div >
        <div>
            <div className={s.inputBlock__cell}>
            <input
               id='inputImage'
               type="file"
               accept="image/*" 
               onChange={(e)=>fileSelectedHandler(e.target.files)}
               value={props.newPostImage}
               className={s.hide_Input}
            />
            <label htmlFor='inputImage' 
            className={s.inputImageLabel}
            >Upload file</label>
        </div>
        </div> 
       <div className={s.renderedImages__row}>
           <div className={s.renderedImages__cell}>
          {  
           [...props.postImages].reverse().map((el) => (
            <ul key={el.id} className={s.items}>
              <img src={el.img} alt="" className={s.image_Item}/>
              <button id='button' className={s.hide_Button}></button>
              <label htmlFor='button' onClick={() => props.deleteImage(el.id)} className={s.deleteImageLabel}>delete</label>
            </ul>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Images;


