import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Conrad
                </a>
                <div className="metadata">
                    <span className="date">Today at 13:00</span>
                </div>
                <div className="text">Hello React-World!</div>
            </div>
        </div>
    );
};

export default CommentDetail;
