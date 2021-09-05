import { ContactsListStyled } from './ContactsListStyled';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, search, deleteItem }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, phone }) => {
        if (!name.includes(search)) return false;
        return (
          <li key={id} className="item">
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
          </li>
        );
      })}
    </ContactsListStyled>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  search: PropTypes.string,
  deleteItem: PropTypes.func,
};
