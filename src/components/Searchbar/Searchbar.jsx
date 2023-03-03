import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmitForm }) => (
  <header class="searchbar" onSubmit={onSubmitForm}>
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
