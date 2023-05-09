
import React from 'react';

export class App extends React.Component {
  
  state = {
  contacts: [],
  name: '',
  // Step 2.1 creat new object & add to the component's state
  contactsNumber: '',
  // Step 2.2 pass name: '', & contactsNumber: '', in ContactForm
  }

  // handleChange = event => {
  //   console.log(event.currentTarget);
  //   console.log(event.currentTarget.name);
  //   console.log(event.currentTarget.value);

  //   this.setState({
  //     [event.currentTarget.name]: event.currentTarget.value
  //   });
  // }

  // Destruct the handleChange method
  // Step 2.2 pass handleChange in ContactForm

  handleChange = event => {
    const {name, value} = event.currentTarget;

    this.setState({[name]: value});
  }

  // Step 2.1 add an event handler function for the form's onSubmit event
  //prevent the default form submission behavior In this function
  // Step 2.2 pass handleSubmit in ContactForm
  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.contactsNumber,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      contactsNumber: '',
    }));
  };

  // Step 2.3 get component's from ContactForm state
  FormStateDataReceiver = data => { 
    console.log(data);
  }

  render() {
      return (
      <div
        style={{
          height: '100vh',
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

          // Step 2.2 pass form HTML layout in ContactForm

          <ContactForm onReceiver={this.FormStateDataReceiver} />

          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>

            <label>Number
              <input
                type="tel"
                name="contactsNumber"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.contactsNumber}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>

          <h2>Contacts</h2>

          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.number}>
                {contact.name}: <span>{contact.number}</span>
              </li>))}
          </ul>
          
       </div>
  );
  }
  
};

// export default App;
