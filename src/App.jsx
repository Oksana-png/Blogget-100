import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';

function App() {
  //  кастомный хук useToken
  const [token, delToken] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main/>
    </>
  );
}

export default App;
