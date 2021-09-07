import Contact from './contactsList/Contact';
import { ContactsListStyled } from './ContactsListStyled';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);
  const search = useSelector((state) => state.search);

  return (
    <>
      {contacts.length !== 0 && (
        <ContactsListStyled>
          <ul className="list">
            {contacts.length !== 0 &&
              contacts.map(({ id, name, phone }) => {
                if (!name.includes(search)) return false;
                return <Contact key={id} name={name} phone={phone} id={id} />;
              })}
          </ul>
        </ContactsListStyled>
      )}
    </>
  );
};

export default ContactsList;
