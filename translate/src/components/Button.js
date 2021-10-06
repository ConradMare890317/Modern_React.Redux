import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
      return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render (){
    return (
        <ColorContext.Consumer>
        {color => 
        <div class="ui animated button" tabindex="0">
        <div class="visible content">
            <LanguageContext.Consumer>
                {value => this.renderSubmit(value)}
            </LanguageContext.Consumer>
        </div>
        <div class="hidden content">
          <i class="check icon"></i>
        </div>
      </div>
        }
      
      </ColorContext.Consumer>
    );
  }

}

export default Button;
