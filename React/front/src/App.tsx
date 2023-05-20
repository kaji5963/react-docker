import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
