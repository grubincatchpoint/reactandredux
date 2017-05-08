import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from'./components/video_list';
import VideoDetail from './components/video_detail';
//Saving youtube API key
const api_key = 'AIzaSyC6yr7WO9K626VdKJnspuL23HN8oJReFww';

// Create a new component. Should produce some HTML
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({key: api_key, term: 'league of legends'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (<div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos} />
  </div>
  );
  }
}

//Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
