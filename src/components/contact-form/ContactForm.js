import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: '',
    contactsNumber: '',
  }

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

  render() { 
    return (
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
    );

  }
  
}

export default ContactForm;