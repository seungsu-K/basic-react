import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div role="alert">
      <h1>
        {error.status} {error.statusText}
      </h1>
      <p>{error.error.message}오류가 발생 했습니다.</p>
      <p>
        <Link to="/">홈</Link>으로 이동하세요
      </p>
    </div>
  );
}

export default ErrorPage;
