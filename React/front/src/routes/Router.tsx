import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Test } from '../components/pages/test';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = () => {
  return (
    <HeaderLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </HeaderLayout>
  );
};
