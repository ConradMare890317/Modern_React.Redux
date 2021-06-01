import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Conrad" timeAgo="Today at 16:00" content="Hello" />
            <CommentDetail author="Phil" timeAgo="Today at 16:30" content="React" />
            <CommentDetail author="Mariaan" timeAgo="Yesterday at 12:00" content="World!" />
            <CommentDetail author="Celesté" timeAgo="Monday at 09:00" content="Are You" />
            <CommentDetail author="Ruan" timeAgo="Today at 06:00" content="Ready?" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
