import { Component } from "react";

export class FilterField extends Component {
  onHandleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { handleFilter, value } = this.props;
    return (
      <label htmlFor="">
        <span className="label-form">Search contact</span>
        <input
          type="text"
          name="filter"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onHandleChange}
        />
      </label>
    );
  }
}
