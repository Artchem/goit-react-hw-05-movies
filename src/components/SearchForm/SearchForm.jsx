import { toast } from 'react-toastify';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledSpan,
} from './SearchForm.styled';
import { FaSistrix } from 'react-icons/fa6';

const { useState } = require('react');

function SearchForm({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = evt => {
    // console.log(evt);
    setSearchText(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchText.trim() === '') {
      toast.error('Enter search movies !');
      return;
    }
    onSubmit(searchText);
    resetForm();
  };
  const resetForm = () => {
    setSearchText('');
  };

  return (
    <StyledForm>
      <StyledInput
        onChange={handleChange}
        value={searchText}
        name="searchText"
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search movies"
      />
      <StyledBtn type="submit" onClick={handleSubmit}>
        <FaSistrix size={25} />
        <StyledSpan>Search</StyledSpan>
      </StyledBtn>
    </StyledForm>
  );
}

export default SearchForm;
