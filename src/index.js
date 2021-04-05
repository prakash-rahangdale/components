import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentdetail';

//react props system 
//passing and receiving props
//passing multiple props

const App = () => {
    return (
        <div className="comment container">
         <CommentDetail author="sem" timeAgo="today at 02.00 pm" comment="nice post" avatar={faker.image.avatar()} />   
         <CommentDetail author="alex" timeAgo="today at 04.00 pm" comment="nice blog post" avatar={faker.image.avatar()} />   
         <CommentDetail author="jane" timeAgo="yesterday at 06.00 pm" comment="nice one" avatar={faker.image.avatar()} />   
         <CommentDetail author="roy" timeAgo="yesterday at 08.00 pm" comment="good post" avatar={faker.image.avatar()} />   
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
