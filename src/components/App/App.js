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
    this.setState({
      selectedZip : zip
    })
    this.filterTrees(zip)
  }

  filterTrees = (zippy) => {
    let matchZip = this.state.allZipCodes.find(zip => zip.zip_code === zippy);
    let treeList = this.state.allTrees.filter(tree => tree.growing_zone === matchZip.growing_zone)
      this.setState({
        filteredTrees : treeList
      })
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
      <Header />
      <Home changeZipCode={this.changeZipCode}/>
      <SearchResult filteredTrees={this.state.filteredTrees}/>
      <DetailsContainer />
      </>
    )
  }
  
}
export default App;
