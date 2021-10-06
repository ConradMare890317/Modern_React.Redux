import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
          <i
            className="flag za"
            onClick={() => this.onLanguageChange("afrikaans")}
          />
          <i
            className="flag brazil"
            onClick={() => this.onLanguageChange("portugese")}
          />
        </div>
        <ColorContext.Provider value="red">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;