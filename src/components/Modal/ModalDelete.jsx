import { RiCloseLine } from 'react-icons/ri';
import { 
  DarkBG, 
  Centered, 
  ModalWindow, 
  ModalHeader, 
  Heading, 
  ModalContent, 
  ModalActions, 
  ActionsContainer, 
  CloseBtn, 
  DeleteBtn, 
  CancelBtn 
} from './Modal.styled';

export const ModalDelete = ({ isDeleteOpen, onDelete, contactId }) => {
  return (
    <>
      <DarkBG onClick={() => isDeleteOpen(false)} />
      <Centered>
        <ModalWindow>
          <ModalHeader>
            <Heading>Dialog</Heading>
          </ModalHeader>
          <CloseBtn onClick={() => isDeleteOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </CloseBtn>
          <ModalContent>
            Are you sure you want to delete the contact?
          </ModalContent>
          <ModalActions>
            <ActionsContainer>
              <DeleteBtn onClick={() => {
                onDelete(contactId);
                isDeleteOpen(true);
              }}>
                Delete
              </DeleteBtn>
              <CancelBtn
                onClick={() => isDeleteOpen(false)}
              >
                Cancel
              </CancelBtn>
            </ActionsContainer>
          </ModalActions>
        </ModalWindow>
      </Centered>
    </>
  );
};