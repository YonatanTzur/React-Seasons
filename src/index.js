import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner'



class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        // Use mozilla API to get user location
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
        // console.log("this", this);
    }

    renderContent() {
        // Display cases
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />

        }
        return <Spinner message="Please accept locatio  n request..." />
    }

    render() {
        return <div className='border red'>
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
