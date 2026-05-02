import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ApplicationsPage from './pages/ApplicationsPage';
import MainPage from './pages/MainPage';
import ProductionProgramPage from './pages/ProductionProgramPage';
import DailyAssignmentsPage from './pages/DailyAssignmentsPage';
import StatusPage from './pages/StatusPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import LoadingPage from './pages/LoadingPage';

const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [useManualAuth, setUseManualAuth] = useState(
    () => JSON.parse(localStorage.getItem('useManualAuth')) || false
  );

  useEffect(() => {
    const checkAuth = async () => {
      if (useManualAuth) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/check', {
          method: 'POST',
          credentials: 'include',
        });

        const data = await response.json();
        if (response.ok && data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Ошибка при проверке авторизации:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [useManualAuth]);

  const handleToggleAuthMode = (value) => {
    setUseManualAuth(value);
    localStorage.setItem('useManualAuth', JSON.stringify(value));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert('Вы вышли из системы!');
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <div className="app">
        <div className="auth-toggle">
          <label>
            <input
              type="checkbox"
              checked={useManualAuth}
              onChange={(e) => handleToggleAuthMode(e.target.checked)}
            />
            Ручное управление авторизацией
          </label>
        </div>

        {useManualAuth && (
          <div className="manual-auth-controls">
            <button onClick={() => setIsAuthenticated(true)}>Авторизовать</button>
            <button onClick={() => setIsAuthenticated(false)}>Сбросить авторизацию</button>
          </div>
        )}

        {isAuthenticated && <Header onLogout={handleLogout} />}

        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <LoginPage onLogin={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <ApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/production-program"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <ProductionProgramPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-assignments"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <DailyAssignmentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/status"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <StatusPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              isAuthenticated ? <NotFoundPage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
