import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { FilterField } from "./FilterField/FilterField";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const contactsParse = JSON.parse(contacts);
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const contacts = JSON.stringify(this.state.contacts);
    if (this.state !== prevState) {
      localStorage.setItem("contacts", contacts);
    }
  }

  FilterList = [];
  Contacts = [...this.state.contacts];

  handleFilter = (value) => {
    this.setState({ filter: value });
    this.FilterList = [...this.Contacts].filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  };

  handleSubmitForm = (data) => {
    const checkedName = this.onSearchNameInState(data);

    if (checkedName) {
      return alert("Sorry, but this Name is in this Phone book");
    }
    this.createNewContact(data);
  };

  onSearchNameInState = (target) => {
    return this.state.contacts.some((item) => item.name === target.name);
  };

  createNewContact = (contact) => {
    this.Contacts.push(contact);
    this.setState({ contacts: this.Contacts });
  };

  deleteContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contact),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmitForm} />

        {contacts.length >= 0 && (
          <ContactsList
            contacts={contacts}
            title="All contacts"
            onDeleteContact={this.deleteContact}
          />
        )}
        <FilterField onChange={this.handleFilter} value={filter} />

        {filter.length > 0 && (
          <ContactsList contacts={this.FilterList} title="Filter Contacts" />
        )}
      </>
    );
  }
}

export default App;
