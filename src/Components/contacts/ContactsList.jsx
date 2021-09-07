import Contact from './contactsList/Contact';
import { ContactsListStyled } from './ContactsListStyled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      {filteredContacts.length !== 0 && (
        <ContactsListStyled>
          <ul className="list">
            {filteredContacts.map(({ id, name, phone }) => {
              return <Contact key={id} name={name} phone={phone} id={id} />;
            })}
          </ul>
        </ContactsListStyled>
      )}
    </>
  );
};

export default ContactsList;
