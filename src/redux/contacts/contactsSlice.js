import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {  
    state.isLoading = true;
    state.error = null;  
};

const handleRejected = (state, { error }) => {
    state.isLoading = false;
    state.error = error.message;  
};

const handleFetchContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;  
};

const handleAddContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    // state.items = [action.payload, ...state.items];
    state.items.push(action.payload);
  
};

const handleDeleteContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(item => item.id !== action.payload.id); 
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactsFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);    
  },
});

export const contactsReducer = contactsSlice.reducer;
