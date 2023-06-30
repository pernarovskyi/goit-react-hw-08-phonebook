import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logOut());

  const style = {
    color: 'white',
    textDecoration: 'none',
  };

  const welcome = {
    margin: '0',
    marginRight: '30px',    
    display: 'flex',
  }
  return (
    <>
      <h5 style={welcome}>Welcome, {user.name}!</h5>
      <Button color="inherit" onClick={handleLogout}>
        <Link to="/logout" style={style}>
          {' '}
          Logout
        </Link>
      </Button>
    </>
  );
};

export default UserMenu;
