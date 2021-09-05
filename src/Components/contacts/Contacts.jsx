import ContactsList from './contactsList/ContactsList';
import { ContactsStyled } from './ContactsStyled';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, search, deleteItem }) => {
  return (
    <ContactsStyled>
      <ContactsList
        contacts={contacts}
        search={search}
        deleteItem={deleteItem}
      />
    </ContactsStyled>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onSearch: PropTypes.func,
  search: PropTypes.string,
  deleteItem: PropTypes.func,
};
