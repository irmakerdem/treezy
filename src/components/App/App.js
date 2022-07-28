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

  changeSelectedTree = (idt) => {
    console.log('id tree',idt)
    let matchTree = this.state.filteredTrees.find(tree => {
     return tree.id === idt})
     console.log('MATCH TREE BEFORE SET STATE', matchTree)
    this.setState({
      selectedTree: matchTree
    })
    console.log('MATCH TREE AT THE END',matchTree)
    // this.viewTree(this.state.selectedTree)
  }

  viewTree = (selectedTree) => {
//
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
    console.log('SELECTED TREE AT THE ACTUAL END', this.state.selectedTree)
    return (
      <>
      <Header />
      <Home changeZipCode={this.changeZipCode}/>
      <SearchResult filteredTrees={this.state.filteredTrees} changeSelectedTree={this.changeSelectedTree}/>
      <DetailsContainer selectedTree={this.state.selectedTree}/>
      </>
    )
  }
  
}
export default App;
