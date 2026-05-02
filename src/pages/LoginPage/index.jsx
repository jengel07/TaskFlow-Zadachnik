import { useState } from 'react';
import './index.scss';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Авторизация</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <input
              type="email"
              id="email"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="login__form-group">
            <input
              type="password"
              id="password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              required
            />
          </div>
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
