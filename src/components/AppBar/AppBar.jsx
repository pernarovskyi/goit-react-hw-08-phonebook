import * as React from 'react';
import useAuth from 'hooks/useAuth';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import AppBarMUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const style = {
    color: 'white',
    textDecoration: 'none',
  };

  console.log('isLoggedIn: ' + isLoggedIn);
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarMUI position="static">
          <Toolbar>
            <Typography variant="h6" component="div" mr sx={{ flexGrow: 1 }}>
              <Link to="/" style={style}>
                Home
              </Link>
            </Typography>

            {isLoggedIn ? (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  ml
                  sx={{ flexGrow: 9 }}
                >
                  <Link to="/contacts" style={style}>
                    Contacts
                  </Link>
                </Typography>
                <UserMenu />
              </>
            ) : (
              <AuthNav />
            )}
          </Toolbar>
        </AppBarMUI>
      </Box>
    </header>
  );
};
export default AppBar;
