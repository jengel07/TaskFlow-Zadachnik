import React, { useState, useEffect } from 'react';
import './index.scss';

import newTaskIconPng from "../../assets/icons/new-task.png";
import completedIconPng from "../../assets/icons/completed.png";
import inProgressIconPng from "../../assets/icons/in-progress.png";
import deferredIconPng from "../../assets/icons/deffered.png";
import overdueIconPng from "../../assets/icons/overdue.png";
import errorIconPng from "../../assets/icons/error.png";

const MainPage = () => {
  // Состояние для текущего месяца
  const [month, setMonth] = useState('');

  useEffect(() => {
    // Массив названий месяцев
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    // Получаем текущий месяц
    const currentMonth = new Date().getMonth();
    setMonth(months[currentMonth]);
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__row">
        <div className="main-page__card">
          <h2 className="main-page__title">
            <span role="img" aria-label="notification">
              🔔
            </span>
            Уведомления
          </h2>
          <select className="main-page__filter">
            <option>Все</option>
            <option>Новые</option>
            <option>Обновления</option>
          </select>
          <div className="main-page__notifications">
            <div className="notification notification--in-progress">
              Статус изменен: Задача №1 | Начальник участка №1 | Сантехники | ФИО - В ПРОЦЕССЕ!
            </div>
            <div className="notification notification--completed">
              Статус изменен: Задача №2 | Начальник участка №2| Электрики | ФИО - ВЫПОЛНЕНА!
            </div>
            <div className="notification notification--new">
              <img src={newTaskIconPng} width={"30px"} height={"30px"} alt="new task icon" />
              <div>НОВАЯ ЗАДАЧА: Задача №3 | Начальник участка №3 | Плотники | ФИО</div>
            </div>
            <div className="notification notification--updated">
              Обновление: Задача №4 | Начальник участка №1 | Сантехники | ФИО - В ПРОЦЕССЕ!
            </div>
          </div>
        </div>

        <div className="main-page__card">
          <h2 className="main-page__title">
            <span role="img" aria-label="calendar">
              📅
            </span>
            Производственная программа: {month}
          </h2>
          <ul className="main-page__tasks">
            {/* Данные задач, которые зависят от текущего месяца */}
            {month === 'Январь' && (
              <>
                <li>2025-01-15: Плановые осмотры кровли</li>
                <li>2025-01-20: Заделка продухов в цоколях</li>
                <li>2025-01-22: Ремонт системы отопления</li>
                <li>2025-01-25: Обновление оконных рам</li>
              </>
            )}
            {/* Добавьте другие условия для других месяцев, если нужно */}
          </ul>
        </div>
      </div>

      <div className="main-page__row">
        <div className="main-page__card">
          <h2 className="main-page__title">
            <span role="img" aria-label="status">
              ✔️
            </span>
            Учёт статуса задач
          </h2>
          <div className="filter">
            <label className="filter__label" htmlFor="month-select">Тип задачи:</label>
            <select className="filter__select" id="month-select">
              <option value="all">Производственная программа</option>
              <option value="january">Заявки</option>
              <option value="february">Ежедневные поручения</option>
            </select>
          </div>
          <ul className="main-page__status-list">
            <li className="status-item status-item--completed">
              <img src={completedIconPng} alt="completed icon" />
              <div>Завершено: 1</div>
            </li>
            <li className="status-item status-item--in-progress">
              <img src={inProgressIconPng} alt="in progress icon" />
              <div>В процессе: 2</div>
            </li>
            <li className="status-item status-item--pending">
              <img src={deferredIconPng} alt="deffered icon" />
              <div>Перенесено: 2</div>
            </li>
            <li className="status-item status-item--overdue">
              <img src={overdueIconPng} alt="overdue icon" />
              <div>Невыполнено: 1</div>
            </li>
          </ul>
        </div>

        {/* Блок просроченных задач */}
        <div className="main-page__card">
          <h2 className="main-page__title">
            <span role="img" aria-label="warning">
              ⚠️
            </span>
            Невыполненные ежедневные поручения
          </h2>
          <ul className="main-page__overdue-tasks">
            <li>
              <img src={errorIconPng} width={"20px"} height={"20px"} alt="error icon" />
              <div>Задача №1 | Начальник участка №1 | Сантехники | ФИО</div>
            </li>
            <li>
              <img src={errorIconPng} width={"20px"} height={"20px"} alt="error icon" />
              <div>Задача №2 | Начальник участка №2| Электрики | ФИО</div>
            </li>
            <li>
              <img src={errorIconPng} width={"20px"} height={"20px"} alt="error icon" />
              <div>Задача №3 | Начальник участка №3 | Плотники | ФИО</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
