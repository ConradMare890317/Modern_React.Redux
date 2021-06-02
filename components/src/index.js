import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

if (module.hot) {
    module.hot.accept();
}


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail
                author="Conrad"
                timeAgo="Today at 16:00"
                content="Hello"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Phil"
                timeAgo="Today at 16:30"
                content="React"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Mariaan"
                timeAgo="Yesterday at 12:00"
                content="World!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Celesté"
                timeAgo="Monday at 09:00"
                content="Are You"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Ruan"
                timeAgo="Today at 06:00"
                content="Ready?"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
