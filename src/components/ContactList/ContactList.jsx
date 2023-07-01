import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchContacts,
  deleteContact,
  updateContact,
} from 'redux/contacts/contactsOperations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { List, Item, ItemRow } from './ContactList.styled';
import Loader from 'components/Loader';
import { selectFilter } from 'redux/filter/filterSelector';
import Button from '@mui/material/Button';
import { ModalDelete, ModalEdit } from 'components/Modal';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const appliedFilter = useSelector(selectFilter);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [contactId, setContactId] = useState(null);
  const [contactName, setContactName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = (id, name, number) => {
    dispatch(updateContact({ id, name, number }));
  };

  const handleModalDeleteClose = () => {
    setIsDeleteOpen(false);
  };
  const handleModalEditClose = () => {
    setIsEditOpen(false);
  };
  const handleModalDeleteOpen = () => {
    setIsDeleteOpen(true);
  };
  const handleModalEditOpen = () => {
    setIsEditOpen(true);
  };

  const contactListNotificationStyle = {
    textAlign: 'center',
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {!isLoading &&
        filteredContacts.length === 0 &&
        !appliedFilter &&
        !error && (
          <h5 style={contactListNotificationStyle}>Phonebook is empty</h5>
        )}
      {appliedFilter && filteredContacts.length === 0 && (
        <h5 style={contactListNotificationStyle}>No matches found</h5>
      )}
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ItemRow>{name}</ItemRow>
            <ItemRow>{number}</ItemRow>
            <Button
              style={{ fontSize: '10px' }}
              variant="text"
              type="submit"
              onClick={() => {
                setContactId(id);
                setContactName(name);
                setContactNumber(number);
                handleModalEditOpen();
              }}
            >
              Edit
            </Button>
            <Button
              style={{ fontSize: '10px' }}
              variant="text"
              type="submit"
              onClick={() => {
                handleModalDeleteOpen();
                setContactId(id);
              }}
            >
              Delete
            </Button>
          </Item>
        ))}

        {isDeleteOpen && (
          <ModalDelete
            isDeleteOpen={handleModalDeleteClose}
            onDelete={handleDelete}
            contactId={contactId}
          />
        )}

        {isEditOpen && (
          <ModalEdit
            isEditOpen={handleModalEditClose}
            contactData={{ contactId, contactName, contactNumber }}
            setContactName={setContactName}
            setContactNumber={setContactNumber}
            onUpdate={handleUpdate}
          />
        )}
      </List>
    </>
  );
};
