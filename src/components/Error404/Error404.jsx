import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

export default function Error404() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-section">
          <div className="error-number">404</div>
          <h1 className="error-title">Страница не найдена</h1>
          <p className="error-description">
            К сожалению, запрошенная вами страница не существует. 
            Возможно, вы ввели неверный адрес или страница была удалена.
          </p>
          
          <Link to="/main" className="btn-home">
            Вернуться на главную
          </Link>
          
          <div className="error-suggestion">
            <p>Или попробуйте:</p>
            <div className="suggestion-links">
              <Link to="/main" className="suggestion-link">
                • Посмотреть задачи
              </Link>
              <Link to="/create" className="suggestion-link">
                • Создать новую задачу
              </Link>
            </div>
          </div>
        </div>
        
        <div className="error-illustration">
          <div className="illustration-wrapper">
            <div className="missing-page">
              <div className="page">
                <div className="page-content">
                  <p>?</p>
                </div>
              </div>
              <div className="page-shadow"></div>
            </div>
            <div className="desktop">
              <div className="screen">
                <div className="screen-content">
                  <span className="error-symbol">?!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
