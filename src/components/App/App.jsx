import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import useAuth from 'hooks/useAuth';
import RestrictedRoute from 'components/Route/RestrictedRoute';
import PrivateRoute from 'components/Route/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LogIn = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<Register />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LogIn />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} /> {/*NotFoundPage*/}
        </Route>
      </Routes>
    )
  );
};

export default App;
