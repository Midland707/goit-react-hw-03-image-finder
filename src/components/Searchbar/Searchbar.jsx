import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchWord: '',
  };
  onChangeHandel = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    this.props.onSubmitForm(this.state.searchWord);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="searchWord"
            placeholder="Search images and photos"
            required
            onChange={this.onChangeHandel}
          />
        </form>
      </header>
    );
  }
}
