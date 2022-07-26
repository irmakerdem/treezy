import React, { Component } from 'react';
import './App.css';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';
import Home from '../Home/Home';
import { getTrees, getZip } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allTrees: [], 
      allZipCodes: [],
      selectedZip: '',
      filteredTrees: [], 
      selectedTree: ''
    }
  }
  
  changeZipCode = (zip , event) => {
    event.preventDefault()
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
      this.setState( { allTrees : data} );
    })
    getZip()
    .then(data => {
      this.setState( { allZipCodes : data} );
    })
  }
  
  render() {
    return (
      <>
      <p>App Component</p>
      <Header />
      <Home changeZipCode={this.changeZipCode}/>
      <SearchResult />
      <DetailsContainer />
      </>
    )
  }
  
}
export default App;
