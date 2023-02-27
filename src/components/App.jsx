import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { getFilteredArray } from 'utils/getFilteredArray';

class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    const parseContact = JSON.parse(localStorage.getItem('contacts'));

    if (parseContact) {
      this.setState({ contacts: parseContact });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = getFilteredArray(contacts, 'name', filter);

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
