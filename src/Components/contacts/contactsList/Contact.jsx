import { ContactStyled } from './ContactStyled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/contacts/contacts-actions';

const Contact = ({ name, phone, id, deleteItem }) => {
  return (
    <ContactStyled>
      <p className="text">
        {name}: {phone}
      </p>
      <button
        className="submit-button"
        type="button"
        value={id}
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </ContactStyled>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(actions.remove(id)),
});

export default connect(null, mapDispatchToProps)(Contact);

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
  deleteItem: PropTypes.func,
};
