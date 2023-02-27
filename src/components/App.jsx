import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Report } from 'notiflix/build/notiflix-report-aio';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return Report.warning(
        'Warning',
        'The contact to that name already exists!',
        'Okay'
      );
    }

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  editContact = updatedContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact => {
        if (contact.id === updatedContact.id) {
          const newContact = { ...contact, ...updatedContact };
          return newContact;
        }
        return contact;
      }),
    }));
  };

  chengeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.chengeFilter} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
          editContact={this.editContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
