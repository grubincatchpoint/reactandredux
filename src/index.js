import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//Saving youtube API key
const api_key = 'AIzaSyC6yr7WO9K626VdKJnspuL23HN8oJReFww';

YTSearch({key: api_key, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. Should produce some HTML
const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
}

//Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
