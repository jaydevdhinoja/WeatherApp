import React, { Component } from 'react'
import {connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '..//components/google_map'

class WeatherList extends Component{
    renderData(cityData)
    {
        const name = cityData.city.name; 
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        
        //es6
        const {lon,lat} = cityData.city.coord;
        console.log(lon,lat);
        //es5
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;

        //const 
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} colour="orange" unit="K"/></td>
                <td><Chart data={pressure} colour="green" unit="hPa"/></td>
                <td><Chart data={humidities} colour="black" unit="%"/></td>
            </tr>
        )
    }
    render()
    {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humadity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderData)}
                </tbody>
             </table>
        )
    }
}

//ES5
function mapStatetoProps(state)
{
    //console.log("mapstate - ", state);
    return{listItems:state.weather};
}

//ES6
//function mapStatetoProps({weather})
//{
//    return{weather};
//}

export default connect(mapStatetoProps)(WeatherList);
