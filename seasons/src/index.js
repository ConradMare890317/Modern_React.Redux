import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
    module.hot.accept();
}
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));


// GeoLocation API = "developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/"
