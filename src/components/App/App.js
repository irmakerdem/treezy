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
      selectedTree: ''
    }
  }
  
  changeZipCode = (zip) => {
    // event.preventDefault();
    
    this.setState({
      selectedZip : zip
    })
    this.filterTrees(zip);
    
  }

  // filterTrees = (zippy) => {
  //   let matchZip = this.state.allZipCodes.find(zip => zip.zip_code === zippy);
  //   let treeList = this.state.allTrees.filter(tree => tree.growing_zone === matchZip.growing_zone)
  //     this.setState({
  //       filteredTrees : treeList
  //     })
  // }

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

  viewTree = (selectedTreeID) => {
    let matchTree = this.state.allTrees.find(tree => {
      return tree.id === selectedTreeID})
      this.setState({
        selectedTree: matchTree
      })
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
    console.log('SELECTED TREE AT THE ACTUAL END', this.state.selectedTree)
    
    return (
      <>
        <Header clearZipTrees={this.clearZipTrees}/>
        <Switch>
          <Route exact path="/result" render={(location ) => {
            {console.log(location.location.state.zip, "<<< location.location.state.zip");}
            // {this.state.selectedZip ? this.changeZipCode(this.state.selectedZip) : this.changeZipCode(location.location.state.zip);}
            return <SearchResult zip={location.location.state.zip} allZipCodes={this.state.allZipCodes} changeZipCode={this.changeZipCode} allTrees={this.state.allTrees} changeSelectedTree={this.changeSelectedTree} clearZipTrees={this.clearZipTrees}/>} 
          }/>
          <Route
            path='/:id'
            render={({ match }) => <DetailsContainer match={match.params.id} trees={this.state.allTrees} selectedTree={this.state.selectedTree} clearSelectedTree={this.clearSelectedTree}/>}/>
          <Route exact path="/" render={() => <Home selectedTree={this.state.selectedTree} changeZipCode={this.changeZipCode}/>} />
          <Route path='/*' render={()=> <Error />}/>
        </Switch>
      </>
    )
  }
  
}
export default App;