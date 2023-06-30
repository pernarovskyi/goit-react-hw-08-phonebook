import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { InnerWrapper, Form } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactExist = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (contactExist) {
      notifyContactExist();
      resetForm();
      return;
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const notifyContactExist = () => toast('Contact aleady exist');
  return (
    <InnerWrapper>
      <Form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <TextField
          sx={{ mb: 2 }}
          id="filled-basic"
          label="Number"
          variant="filled"
          type="text"
          name="number"
          onChange={handleInputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </Form>
      <ToastContainer />
    </InnerWrapper>
  );
};
