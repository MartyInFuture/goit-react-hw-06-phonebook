import { SearchStyled } from './SearchStyled';

const Search = ({ contacts, onSearch }) => {
  return (
    <SearchStyled>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <>
          <h3>Find contacts by name</h3>
          <input className="search" type="text" onChange={onSearch} />
        </>
      )}
    </SearchStyled>
  );
};

export default Search;
