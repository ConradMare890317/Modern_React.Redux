// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
    module.hot.accept();
}

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" for="name">
                Hello React-World! Ready?
            </label>

            <input id="name" type="text" />
            <button style={{ backgroundColor: 'black', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
