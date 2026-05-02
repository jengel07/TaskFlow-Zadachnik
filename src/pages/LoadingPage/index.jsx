import './index.scss';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-page__row">
        <div className="loading-page__card">
          <h2 className="loading-page__title">Загрузка...</h2>
          <p className="loading-page__text">
            Пожалуйста, подождите. Данные загружаются.
          </p>
          <div className="loading-page__spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
