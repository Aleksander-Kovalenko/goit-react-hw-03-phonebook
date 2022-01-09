import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { FilterField } from "./FilterField/FilterField";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

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
