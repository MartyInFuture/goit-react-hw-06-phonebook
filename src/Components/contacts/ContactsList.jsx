import Contact from './contactsList/Contact';
import { ContactsListStyled } from './ContactsListStyled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactsList = ({ contacts, search }) => {
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

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  search: state.search,
});

export default connect(mapStateToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.array,
  search: PropTypes.string,
};
