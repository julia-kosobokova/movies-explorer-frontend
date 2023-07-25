import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  function handleBackButton (e) {
    e.preventDefault();
    navigate(-2);
  }

  return (
    <main className="error">
      <section className="error__body">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Страница не найдена</h2>
      </section>
      <button type="button" className="error__link" onClick={handleBackButton}>
        Назад
      </button>
    </main>
  );
}

export default Error;
