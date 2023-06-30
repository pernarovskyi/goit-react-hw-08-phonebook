import { Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import { setFilter } from 'redux/filter/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const {
      target: { value },
    } = e;
    dispatch(setFilter(value.trim()));
  };

  return (
    <Wrapper>
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
