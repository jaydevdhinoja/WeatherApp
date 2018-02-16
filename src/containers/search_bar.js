//Search Bar Container
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};

        //this is needed whenver we use eventhandler instead calling function directly from control 
        //i.e.onChange="{()=>this.state.term}"

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term:event.target.value}); 
    }

    onFormSubmit(event){
        event.preventDefault();

        //call fetchWeather action creator 
        //which is attached through mapDispatchToProps
        //and Redux connect method
        this.props.fetchWeather(this.state.term);

        this.setState({term:''});   
    }
    render(){
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a five-day forecast of your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-seconday">Submit</button> 
                </span>
            </form>
        )
    }
}

//this causes the bindActionCreators method to dispatch the returned action
//from fetchWeather action creator to reducer
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

//connect SearchBar component with Redux Store
//null is set as we don't need state at this stage
export default connect(null,mapDispatchToProps)(SearchBar);