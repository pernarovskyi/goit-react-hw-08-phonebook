import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //John Brown
  //john.brown@gmail.com
  //Bot6hop1

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            type="password"
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button
                style={{ fontSize: '12px' }}
                variant="text"
                onClick={handleClick}
              >
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
