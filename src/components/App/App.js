import React, { Component } from 'react';
import './App.css';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';
import Home from '../Home/Home';
import { getTrees } from '../../apiCalls';

class App extends Component {
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
    getTrees() 
    .then(data => {
      console.log(data, "DATA")
      this.setState({ allTrees : data});
    })
    console.log(this.state.allTrees)
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
