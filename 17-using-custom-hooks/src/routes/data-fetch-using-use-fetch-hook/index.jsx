import useFetch from '@/hooks/useFetch';

function DataFetchUsingUseFetchHook() {
  const { status, error, data } = useFetch('https://koreanjson.com/users');

  // if (status === 'loading') {
  //   return <div> 로딩 중</div>;
  // }

  // if (status === 'error') {
  //   return <div role="alert">{error.message}</div>;
  // }

  console.log(data);

  return (
    <main id="page">
      <h1 className="headline">useFetch() 훅을 사용해 데이터 패칭</h1>
      <div className="description">
        <p>useFetch() 커스텀 훅을 사용해 데이터 패칭</p>
      </div>
      {status === 'loading' && <div>로딩 중...</div>}
      {status === 'error' && <div role="alert">{error.message}</div>}
      {status === 'success' && (
        <ul>
          {data && data.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}
    </main>
  );
}

export default DataFetchUsingUseFetchHook;
