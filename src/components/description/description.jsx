import React from 'react';
import styles from './description.module.css';

const Description = () => {
  return (
      <div className={styles.description__row}>
          <div className={styles.description__cell}>
                  При создании данного WEB-приложения использовались библиотеки React, Redux, React-Redux. Место хранения данных находится в Redux-store, логика распределена в Reducer-ax, состояние сохранеятся в LocalStorage.
                  <p>Архитектура приложения состоит из двух уровней UserInterface (React) и BusinessLogicLayer (Redux).</p>
          </div>
      </div>
  )
}

export default Description;