import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//Saving youtube API key
const api_key = 'AIzaSyC6yr7WO9K626VdKJnspuL23HN8oJReFww';

// Create a new component. Should produce some HTML
const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
}

//Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
