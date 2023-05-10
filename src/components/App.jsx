
import React from 'react';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList'; // new import
import Filter from './filter/Filter'; // new import

export class App extends React.Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    search: '',
  }

  /* 
  Step 2.1 creat new object & add to the component's state
  Step 2.1 add an event handler function for the form's onSubmit event
  prevent the default form submission behavior In this function
  
  Step 2.2 pass name: '', & contactsNumber: '', in ContactForm
  Step 2.2 pass form HTML layout in ContactForm
  Step 2.2 pass handleChange in ContactForm
  Step 2.2 pass handleSubmit in ContactForm
  
  Step 2.3 get component's from ContactForm state 
  */

  // FormStateDataReceiver = data => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, data],
  //   }));
  //   /* 
  //   console.log(data);
  //   setTimeout(() => {
  //   console.log(data);
  //   }, 2000); 
  //   */
  // }

  /* Updating the FormStateDataReceiver method to
  disallow entering an existing contact */
  
  FormStateDataReceiver = (data) => {
  const { name } = data;
  const existingContact = this.state.contacts.find((contact) => contact.name === name);
  if (existingContact) {
    alert(`${name} is already in contacts`);
    return;
  }
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, data],
  }));
 };

  // adding a filter
  
  handleSearchChange = event => {
    this.setState({ search: event.target.value });
  }

  // adding remove

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  
  render() {
    const { contacts, search } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: 10,
          // fontSize: 40,
          color: '#010101'
          }}
        >
          <h1>Phonebook</h1>

          <ContactForm onReceiver={this.FormStateDataReceiver} />

          <h2>Contacts</h2>

          <Filter value={search} onChange={this.handleSearchChange} />
        
          <ContactList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
          
       </div>
  );
  }
};