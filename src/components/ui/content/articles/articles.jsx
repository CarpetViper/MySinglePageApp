import React from 'react';
import s from './articles.module.css';
import {useForm} from 'react-hook-form';

const Articles = (props) => {

  const textareaChange = (event) => {
    let text = event.target.value;
    props.updateNewPostArticle(text);
  };

  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    props.postArticle(data);
  };

  return (
    <div>
      <div className={s.textAreaForm__row}>
          <div className={s.textAreaForm__cell}>
              <form onSubmit={handleSubmit(onSubmit)}>
                   <textarea
                       className={s.textarea}
                       name='textarea'
                       ref={register({required: true, maxLength: 300})}
                       onChange={textareaChange}
                       value={props.newPostArticle}
                   />
                    {errors.textarea && errors.textarea.type === 'required' && (<p>Field is required</p>)}
                    {errors.textarea && errors.textarea.type === 'maxLength' && (<p>Max length 300 simbols</p>)}
                    <div>
                       <input type='submit' value='submit' id='inputArticle' className={s.hide}/>
                       <label htmlFor="inputArticle" className={s.inputTextLabel}>Submit</label>
                    </div>
               </form>
          </div>
       </div>
       <div className={s.displayArticlesBlock__row}>
          <div className={s.displayArticlesBlock__cell}>
              {
                [...props.postArticles].reverse().map((el) => (
                   <ul className={s.item} key={el.id}>
                      <li>
                          {el.article}
                      </li>
                      <button 
                             id='deleteArticle'
                             className={s.hide}>Delete
                      </button>
                      <label htmlFor="deleteArticle" onClick={() => props.deleteArticle(el.id)} className={s.deleteArticleLabel}>Delete</label>
                   </ul>
                 ))
              }
           </div>
      </div>
    </div>
  );
};

export default Articles;
