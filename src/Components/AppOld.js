import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts';
import Search from './search/Search';

const INITIAL_STATE = {
  phone: '',
  name: '',
};

class App extends Component {
  state = {
    contacts: [],
    inputId: uuidv4(),
    phoneInputId: uuidv4(),
    search: '',
    name: '',
    phone: '',
  };

  componentDidMount() {
    if (localStorage.contacts === undefined) return false;
    this.setState({ contacts: JSON.parse(localStorage.contacts) });
  }

  addToLocalStore() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.contacts.find((item) => item.name === this.state.name)) {
      alert(`User with name ${this.state.name} alredy exist!`);
      return false;
    }

    this.setState(
      {
        contacts: [
          ...this.state.contacts,
          { name: this.state.name, id: uuidv4(), phone: this.state.phone },
        ],
        ...INITIAL_STATE,
      },
      this.addToLocalStore
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  deleteItem = (e) => {
    const index = this.state.contacts.indexOf(
      this.state.contacts.find((item) => item.id === e.target.value)
    );
    this.setState((prev) => {
      prev.contacts.splice(index, 1);
      return {
        contacts: [...prev.contacts],
      };
    }, this.addToLocalStore);
  };

  onSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <Phonebook
          handleSubmit={this.handleSubmit}
          inputId={this.state.inputId}
          handleChange={this.handleChange}
          phoneInputId={this.state.phoneInputId}
          phone={this.state.phone}
          name={this.state.name}
        />
        <h2>Contacts</h2>

        <Search onSearch={this.onSearch} contacts={this.state.contacts} />
        {this.state.contacts.length !== 0 && (
          <Contacts
            contacts={this.state.contacts}
            search={this.state.search}
            deleteItem={this.deleteItem}
          />
        )}
      </div>
    );
  }
}

export default App;
