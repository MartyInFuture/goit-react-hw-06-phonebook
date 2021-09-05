import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts';
import Search from './search/Search';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [inputId] = useState(uuidv4());
  const [phoneInputId] = useState(uuidv4());
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (localStorage.contacts !== undefined) {
      setContacts(JSON.parse(localStorage.contacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((item) => item.name === name)) {
      alert(`User with name ${name} already exist!`);
      return false;
    }
    setContacts((prev) => [
      ...prev,
      { name: name, id: uuidv4(), phone: phone },
    ]);
    setName('');
    setPhone('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const deleteItem = (e) => {
    const { value } = e.target;
    const index = contacts.indexOf(contacts.find((item) => item.id === value));

    setContacts((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Phonebook
        handleSubmit={handleSubmit}
        inputId={inputId}
        handleChange={handleChange}
        phoneInputId={phoneInputId}
        phone={phone}
        name={name}
      />
      <h2>Contacts</h2>
      <Search onSearch={onSearch} contacts={contacts} />
      {contacts.length !== 0 && (
        <Contacts contacts={contacts} search={search} deleteItem={deleteItem} />
      )}
    </div>
  );
};

export default App;
