import { SearchStyled } from './SearchStyled';
import { connect } from 'react-redux';
import * as actions from '../../redux/search/search-actions';
import PropTypes from 'prop-types';

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

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (e) => dispatch(actions.search(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  contacts: PropTypes.array,
  onSearch: PropTypes.func,
};
