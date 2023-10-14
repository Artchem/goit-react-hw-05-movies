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
      //   toast.error('Enter search movies !');
      return;
    }
    onSubmit(searchText);
    resetForm();
  };
  const resetForm = () => {
    setSearchText('');
  };

  return (
    <form>
      <input
        onChange={handleChange}
        value={searchText}
        name="searchText"
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search movies"
      />
      <button type="submit" onClick={handleSubmit}>
        {/* <FaSistrix size={25} /> */}
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchForm;
