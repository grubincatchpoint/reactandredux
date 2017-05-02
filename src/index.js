import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from'./components/video_list';
//Saving youtube API key
const api_key = 'AIzaSyC6yr7WO9K626VdKJnspuL23HN8oJReFww';

// Create a new component. Should produce some HTML
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {videos: []};
    YTSearch({key: api_key, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }
  render() {
    return (<div>
    <SearchBar />
    <VideoList videos={this.state.videos} />
  </div>
  );
  }
}

//Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
