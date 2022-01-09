import { Component } from "react";

export class FormField extends Component {
  onHandleChange = (e) => {
    this.props.handleChange(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { type, name, pattern, title, value, handleChange } = this.props;
    return (
      <label htmlFor="">
        <span className="label-form">
          {name[0].toUpperCase() + name.slice(1, name.length)}
        </span>
        <input
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required
          onChange={() => this.onHandleChange()}
          value={value}
        />
      </label>
    );
  }
}
