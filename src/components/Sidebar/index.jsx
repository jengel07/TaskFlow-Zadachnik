// Sidebar.js
import React from 'react';
import './index.scss';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <button className="sidebar__close" onClick={onClose}>
        &times;
      </button>
      <ul className="sidebar__menu">
        <li className="sidebar__item">Главная</li>
        <li className="sidebar__item">Заявки</li>
        <li className="sidebar__item">Производственная программа</li>
        <li className="sidebar__item">Ежедневные поручения</li>
        <li className="sidebar__item">Статус</li>
      </ul>
    </div>
  );
};

export default Sidebar;
