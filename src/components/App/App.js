import React, { Component } from 'react';
import './App.css';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';
import Home from '../Home/Home';
import { getTrees, getZip } from '../../apiCalls';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allTrees: [], 
      allZipCodes: [],
      selectedZip: '',
      filteredTrees: [], 
      selectedTree: '',
      city: ''
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
        filteredTrees : treeList,
        city: matchZip.city
      })
  }

  changeSelectedTree = (idt) => {
    let matchTree = this.state.filteredTrees.find(tree => {
      return tree.id === idt})
    this.setState({
      selectedTree: matchTree
    })
  }

  viewTree = (selectedTree) => {
//
  }

  clearZipTrees = () => {
    this.setState({
      selectedTree: '',
      selectedZip: ''
    })
  }

  clearSelectedTree = () => {
    this.setState({
      selectedTree: ''
    })
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
        <Switch>
          <Route 
            exact path='/'>
	          {this.state.selectedZip ? <Redirect to='/result' /> : <Home changeZipCode={this.changeZipCode}/>}
          </Route>;
          <Route 
            exact path='/result'>
	          {this.state.selectedTree ? <Redirect to='/trees/:id' /> : <SearchResult city={this.state.city} filteredTrees={this.state.filteredTrees} changeSelectedTree={this.changeSelectedTree} clearZipTrees={this.clearZipTrees}/>}
          </Route>; 
          <Route 
            exact path='/trees/:id' 
            render={(match) => <DetailsContainer 
            match={match.match.params.id}
            clearZipTrees={this.clearZipTrees}
            selectedTree={this.state.selectedTree} 
            clearSelectedTree={this.clearSelectedTree}/>}/>
          <Route 
            path='/*' 
            render={()=> <Error />}/>
        </Switch>
      </>
    )
  }
}

export default App;