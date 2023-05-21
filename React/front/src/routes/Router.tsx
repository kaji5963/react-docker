import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Register } from '../components/pages/Register';
import { Search } from '../components/pages/Search';
import { MyProfile } from '../components/pages/MyProfile';
import { NotFound } from '../components/pages/NotFound';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = () => {
  return (
    <HeaderLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HeaderLayout>
  );
};
