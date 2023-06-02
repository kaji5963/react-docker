import { Route, Routes } from 'react-router-dom';
import { Welcome } from '../components/pages/Welcome';
import { Login } from '../components/pages/Login';
import { Register } from '../components/pages/Register';
import { Match } from '../components/pages/Match';
import { Search } from '../components/pages/Search';
import { MyProfile } from '../components/pages/MyProfile';
import { NotFound } from '../components/pages/NotFound';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { EditProfile } from '../components/pages/EditProfile';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/match"
        element={
          <HeaderLayout>
            <Match />
          </HeaderLayout>
        }
      />
      <Route
        path="/search"
        element={
          <HeaderLayout>
            <Search />
          </HeaderLayout>
        }
      />
      <Route
        path="/myProfile"
        element={
          <HeaderLayout>
            <MyProfile />
          </HeaderLayout>
        }
      />

      <Route
        path="/myProfile/edit/:id"
        element={
          <HeaderLayout>
            <EditProfile />
          </HeaderLayout>
        }
      />

      <Route
        path="*"
        element={
          <HeaderLayout>
            <NotFound />
          </HeaderLayout>
        }
      />
    </Routes>
  );
};
