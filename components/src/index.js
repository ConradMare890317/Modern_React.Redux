import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Conrad" />
            <CommentDetail author="Phil" />
            <CommentDetail author="Mariaan" />
            <CommentDetail author="Celesté" />
            <CommentDetail author="Ruan" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
