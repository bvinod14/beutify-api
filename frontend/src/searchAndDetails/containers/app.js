import React, { Component } from 'react'
import DetailsViewer from '../components/details-viewer';
import { APIJSON } from '../components/static'

class App extends Component {
  constructor(){
    super();

    this.state = {
      showDetails: false,
      searchName: '',
      selectedDetails: []
    }

    //static data
    this.responseData = []

    //binding the context to the funtion
    this.toggleDetails = this.toggleDetails.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  toggleDetails(selectedIndex){
    this.setState(prevState => ({ showDetails : !prevState.showDetails,
      selectedDetails: selectedIndex >= 0 ? this.responseData[selectedIndex] : prevState.selectedDetails
    }) );
  }

  filterSearch(e){
    let target = e.target,
    name = target.name,
    value = target.value;

    this.setFilteredList(value);
    this.setState({[name]: value});
  }

  setFilteredList(searchName){
    if(!searchName){
      this.responseData = [];
      return false;
    }

    searchName = new RegExp(searchName,'i');
    this.responseData = APIJSON.item.filter(function(list,index){
      return list.name.search(searchName) > -1
    });
  }

  render () {
    return (
      <div className={`page-container ${this.state.showDetails ? 'hide-overflow':''}`}>
        <div className="search-container">
          <input name="searchName" type="search" value={this.state.searchName} 
            placeholder="Search the API" onChange={this.filterSearch} />
            {/* <div onClick={this.toggleDetails}>Profile Call</div> */}
          {
            this.responseData.length > 0 && 
            <DropDownLIst list={this.responseData} triggerDetails={this.toggleDetails}/>
          }
        </div>
        <DetailsViewer reveal={this.state.showDetails} close={this.toggleDetails}
          data={this.state.selectedDetails} />
      </div>
    )
  }
}

class DropDownLIst extends Component {
  render(){
    return(
      <ul className="filtered-list">
        {
          this.props.list.map((item,index)=>{
            return (<li key={index} onClick={()=> this.props.triggerDetails(index) } >
              <div>{item.name}</div>
              {/* <small>{item.request.url.toString()}</small> */}
              </li>)
         })
        }
      </ul>
    )
  }
}

export default App