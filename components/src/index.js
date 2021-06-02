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
            <ApprovalCard>
                <div>
                    <h4>Ready?</h4>
                    Hello React-World!
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Conrad"
                    timeAgo="Today at 16:00"
                    content="Hello"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Phil"
                    timeAgo="Today at 16:30"
                    content="React"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Mariaan"
                    timeAgo="Yesterday at 12:00"
                    content="World!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Celesté"
                    timeAgo="Monday at 09:00"
                    content="Are You"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Ruan"
                    timeAgo="Today at 06:00"
                    content="Ready?"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
