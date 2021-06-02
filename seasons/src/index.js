import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
    module.hot.accept();
}
class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we do direct assignment to
        // this.state!!!
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //Called state!
                this.setState({ lat: position.coords.latitude });

                //WE DID NOT!!!
                // this.state.lat = position.coords.latitude
            },
            err => console.log(err)
        );
    }

    // React requires render!
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));


// GeoLocation API = "developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/"
