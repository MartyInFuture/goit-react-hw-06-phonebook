import { ContactStyled } from './ContactStyled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/contacts/contacts-actions';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(actions.remove(id));
  };

  return (
    <ContactStyled>
      <p className="text">
        {name}: {phone}
      </p>
      <button
        className="submit-button"
        type="button"
        value={id}
        onClick={deleteItem}
      >
        Delete
      </button>
    </ContactStyled>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
