import { Link } from 'react-router-dom';
import './index.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link to="/" className="not-found__link">
        На главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
