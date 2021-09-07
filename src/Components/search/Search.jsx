import { SearchStyled } from './SearchStyled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/search/search-actions';

const Search = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const search = (e) => dispatch(actions.search(e.target.value));

  return (
    <SearchStyled>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <>
          <h3>Find contacts by name</h3>
          <input className="search" type="text" onChange={search} />
        </>
      )}
    </SearchStyled>
  );
};

export default Search;
