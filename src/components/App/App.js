import React, { Component } from 'react';
import './App.css';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';
import Home from '../Home/Home';
import { getTrees, getZip } from '../../apiCalls';
import { Switch , Route } from 'react-router-dom';
import Error from '../Error/Error';

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
        <Switch>
          <Route exact path='/' render={() => <Home changeZipCode={this.changeZipCode}/>}/>
          <Route exact path='/result' render={() => <SearchResult filteredTrees={this.state.filteredTrees} changeSelectedTree={this.changeSelectedTree}/>}/>
          <Route exact path='/details' render={() => <DetailsContainer selectedTree={this.state.selectedTree}/>}/>
          <Route path='/*' render={()=> <Error />}/>
        </Switch>
      </>
    )
  }
  
}
export default App;
