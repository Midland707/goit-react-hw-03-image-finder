import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
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
      <SearchBar>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="searchWord"
            autoComplete="off"
            value={this.state.searchWord}
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={this.onChangeHandel}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
