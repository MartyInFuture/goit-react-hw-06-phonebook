import PropTypes from 'prop-types';

import { PhonebookStyled } from './PhonebookStyled';

const Phonebook = ({
  handleSubmit,
  inputId,
  handleChange,
  phoneInputId,
  phone,
  name,
}) => {
  return (
    <PhonebookStyled>
      <h2>Phonebook</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor={inputId}>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          id={inputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={phoneInputId}>Phone</label>
        <input
          onChange={handleChange}
          type="text"
          name="phone"
          id={phoneInputId}
          value={phone}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </PhonebookStyled>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  handleSubmit: PropTypes.func,
  inputId: PropTypes.string,
  handleChange: PropTypes.func,
  phoneInputId: PropTypes.string,
  phone: PropTypes.string,
  name: PropTypes.string,
};
