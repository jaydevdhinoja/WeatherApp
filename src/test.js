import React, {Component} from 'react'
import {render} from 'react-dom'
import axios from 'axios'

const SEARCH_ENDPOINT = 'https://api.github.com/search/repositories?q=react';


class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {data:[]};
  }
  
  getReactRepositories = () => axios.get(SEARCH_ENDPOINT)
  .then((result) => result.data.items)
  .then((repos) => repos.map(({forks, name, stargazers_count, html_url}) => ({
    forks,
    name,
    stars: stargazers_count,
    url: html_url,
  })))
  
  componentDidMount()
  {
    let response = this.getReactRepositories();
    console.log(response);
    response.then((data) => this.setState({data:data}));
  }
  render(){
    return(
      <div>
        {this.state.data.map(d => {<div>d.forks</div>})}
      </div>
    )
  }
  
 
}
ReactDOM.render(<App/>, document.getElementById('root'))
