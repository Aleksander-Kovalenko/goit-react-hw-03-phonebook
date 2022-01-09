import { nanoid } from "nanoid";
import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  FilterList = [];

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const id = nanoid(5);
    e.preventDefault();

    const newContact = {
      id: id,
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset() {
    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        {/* Дополнительно: стедлать переиспользываемый компонент label и input*/}

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <span className="label-form">Name</span>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            />
          </label>

          <label>
            <span className="label-form">Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              value={number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
