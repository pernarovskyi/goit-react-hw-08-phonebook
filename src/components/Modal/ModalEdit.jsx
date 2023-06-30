import { RiCloseLine } from 'react-icons/ri';
import {
  DarkBG,
  Centered,
  ModalWindowEdit,
  ModalHeader,
  Heading,
  ModalContent,
  ModalActions,
  ActionsContainer,
  CloseBtn,
  UpdateBtn,
  CancelBtn,
} from './Modal.styled';
import { Box, TextField } from '@mui/material';

export const ModalEdit = ({
  isEditOpen,
  contactData: { contactId, contactName, contactNumber },
  setContactName,
  setContactNumber,
  onUpdate
}) => {
  return (
    <>
      <DarkBG onClick={() => isEditOpen(false)} />
      <Centered>
        <ModalWindowEdit>
          <ModalHeader>
            <Heading>Update Contact</Heading>
          </ModalHeader>
          <CloseBtn onClick={() => isEditOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </CloseBtn>
          <ModalContent>
            <Box>                
              <TextField
                sx={{mb: 3}}
                id="standard-basic"
                variant="standard"
                type="text"
                name="name"
                value={contactName}
                onChange={e => setContactName(e.currentTarget.value)}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
              <TextField 
              id="standard-basic"
              variant="standard"
              type="text"
              name="number" 
              value={contactNumber} 
              onChange={e => setContactNumber(e.currentTarget.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required              
              />
            </Box>
          </ModalContent>
          <ModalActions>
            <ActionsContainer>
              <UpdateBtn
                onClick={() => {
                  onUpdate(contactId, contactName, contactNumber);
                  isEditOpen(true);
                }}
              >
                Update
              </UpdateBtn>
              <CancelBtn onClick={() => isEditOpen(false)}>Cancel</CancelBtn>
            </ActionsContainer>
          </ModalActions>
        </ModalWindowEdit>
      </Centered>
    </>
  );
};
