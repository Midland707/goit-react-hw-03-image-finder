import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmitForm }) => (
  <header className="searchbar">
    <form className="form" onSubmit={onSubmitForm}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
        className="input"
        type="text"
        name="search"
        placeholder="Search images and photos"
        required
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
