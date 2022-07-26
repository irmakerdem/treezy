import React, { Component } from 'react';
import './App.css';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';
import Home from '../Home/Home';
// import apiCalls from '../apiCalls';

class App extends Component() {
  constructor() {
    super()
    this.state = {
      allTrees: [], 
      allZipCodes: [],
      selectedZip: '',
      filteredTrees: [], 
      selectedTreee: ''
    }
  }
  
  changeZipCode = (zip) => {
    console.log('zip-code')
  }

  filterTrees = (zip) => {
    console.log('filter trees')
  }

  viewTree = (id) => {
    console.log('view tree')
  }

  changeSelectedTree = (id) => {
    console.log('change tree')
  }

  componentDidMount = () => {
    console.log('component did mount')
  }

  render() {
    return (
      <>
      <p>App Component</p>
      <Header />
      <Home />
      <SearchResult />
      <DetailsContainer />
      </>
    )
  }
  
}
export default App;
