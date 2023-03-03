export const App = () => {
  onSubmitForm = () => {};

  return (
    <div>
      <Searchbar onSubmitForm={onSubmitForm} />
    </div>
  );
};

// const BASE_URL = 'https://pixabay.com/api/';
// const key = '32874218-f955783fbc8df841e2f172dbc';
// const imgOnPage = 40;
// let pageNumber = 1;
// https://pixabay.com/api/?key=32874218-f955783fbc8df841e2f172dbc&q=SEARCH&image_type=photo&orientation=horizontal&safesearch=true
