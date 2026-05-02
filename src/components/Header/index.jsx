import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import logo from "../../assets/icons/logo-task-05-05.svg";
import bellIcon from '../../assets/icons/Bell.svg';

const Header = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);

      if (!isMobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBurgerClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleNavigation = (path) => {
    setIsSidebarOpen(false);
    navigate(path);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <header className="header">
      {isMobileView ? (
        <div className="header__mobile">
          <div
            className={`header__burger ${isSidebarOpen ? 'is-open' : ''}`}
            onClick={handleBurgerClick}
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          <div className="header__logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Логотип" className="header__logo-image" />
          </div>
        </div>
      ) : (
        <div className="header__logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Логотип" className="header__logo-image" />
        </div>
      )}

      <nav className={`header__menu ${isSidebarOpen ? 'header__menu--open' : ''}`}>
        <ul className="header__menu-list">
          <li
            className={`header__menu-item ${window.location.pathname === "/" ? "active" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            Главная
          </li>
          <li
            className={`header__menu-item ${window.location.pathname === "/applications" ? "active" : ""}`}
            onClick={() => handleNavigation("/applications")}
          >
            Заявки
          </li>
          <li
            className={`header__menu-item ${window.location.pathname === "/production-program" ? "active" : ""}`}
            onClick={() => handleNavigation("/production-program")}
          >
            Производственная программа
          </li>
          <li
            className={`header__menu-item ${window.location.pathname === "/daily-assignments" ? "active" : ""}`}
            onClick={() => handleNavigation("/daily-assignments")}
          >
            Ежедневные поручения
          </li>
          <li
            className={`header__menu-item ${window.location.pathname === "/status" ? "active" : ""}`}
            onClick={() => handleNavigation("/status")}
          >
            Статус
          </li>
        </ul>

        {isMobileView && (
          <button className="header__menu-close" onClick={handleSidebarClose}>
            &times;
          </button>
        )}
      </nav>

      <div className="header__notifications">
        <button onClick={toggleNotifications} className="header__notifications-btn">
          <img 
            src={bellIcon} 
            alt="Уведомления" 
            className={`header__notifications-icon ${notificationsEnabled ? '' : 'disabled'}`} 
          />
        </button>
      </div>

      <button className="header__logout" onClick={onLogout}>
        Выход
      </button>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header onLogout={() => console.log("Logged out")} />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
