import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleClick = () => {
    navigate('/login');
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="User name"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
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
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Button
                style={{ fontSize: '12px' }}
                variant="text"
                onClick={handleClick}
              >
                Already have an account? Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
