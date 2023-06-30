import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  const style = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <>
      <Button color="inherit">
        <Link to="/register" style={style}>
          {' '}
          Register
        </Link>
      </Button>
      <Button color="inherit">
        <Link to="/login" style={style}>
          {' '}
          Login
        </Link>
      </Button>
    </>
  );
};

export default AuthNav;
