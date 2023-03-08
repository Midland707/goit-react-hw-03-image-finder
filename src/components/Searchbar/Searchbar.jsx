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
    if (this.state.searchWord.trim() === '') {
      alert('Ведіть назву фотографії');
      return;
    }
    this.props.onSubmitForm(this.state.searchWord);
    this.setState({ searchWord: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            name="searchWord"
            autoComplete="off"
            value={this.state.searchWord}
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={this.onChangeHandel}
          />
        </form>
      </header>
    );
  }
}
