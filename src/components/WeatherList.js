import React from 'react';

class WeatherList extends React.Component {

    render() {
        if(this.props.weathers) {
            
            let weathers = this.props.weathers;

            return (
                <div className="container">
                    <h3>Weather Forecast</h3>

                    <table className="table">
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Forecast</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            { weathers.map((weather, index) => {
                                let dateTime = weather.dt_txt.split(' ');
                                return (
                                    <tr key={index}>
                                        <td>{dateTime[0]}</td>
                                        <td>{dateTime[1]}</td>
                                        <td>{weather.weather[0].description}</td>
                                    </tr>
                                );
                            }) }


                        </tbody>
                    </table>



                </div>
            );
        } else {
            return(
                <div>
                    <h1>Loading Weather Data ...</h1>
                </div>
            );
        }
    }

}

export default WeatherList;